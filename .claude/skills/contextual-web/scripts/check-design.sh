#!/usr/bin/env bash
# Comprueba reglas de marca en el código de la web.
# Uso: bash check-design.sh [directorio...]   (por defecto: app src components pages layouts)
# Sale con código 1 si hay ERRORES. Los AVISOS requieren criterio humano.

set -u

if [ "$#" -gt 0 ]; then
  DIRS=("$@")
else
  DIRS=()
  for d in app src components pages layouts; do
    [ -d "$d" ] && DIRS+=("$d")
  done
fi

if [ "${#DIRS[@]}" -eq 0 ]; then
  echo "No hay directorios que revisar (busqué app/ src/ components/ pages/ layouts/)."
  exit 0
fi

INCLUDES=(--include='*.vue' --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --include='*.css')
EXCLUDES=(--exclude-dir=node_modules --exclude-dir=.nuxt --exclude-dir=.output --exclude-dir=dist)

errors=0
warnings=0

search() { grep -rnE "${INCLUDES[@]}" "${EXCLUDES[@]}" "$1" "${DIRS[@]}" 2>/dev/null; }

report() { # nivel, título, salida
  local level="$1" title="$2" out="$3"
  [ -z "$out" ] && return
  local n
  n=$(printf '%s\n' "$out" | wc -l | tr -d ' ')
  echo ""
  echo "[$level] $title ($n)"
  printf '%s\n' "$out" | sed 's/^/  /'
  if [ "$level" = "ERROR" ]; then errors=$((errors + n)); else warnings=$((warnings + n)); fi
}

PALETTE='slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black'
PREFIX='bg|text|border|border-[trblxy]|ring|outline|fill|stroke|from|via|to|divide|placeholder|decoration|accent|caret|shadow'

report ERROR "Border-radius (radio 0 en todo)" \
  "$(search '(^|[^a-z-])rounded(-[a-z0-9]+)*(-\[[^]]*\])?' | grep -vE 'rounded-none' ; search 'border-radius:[[:space:]]*[^0;[:space:]]' | grep -vE 'border-radius:[[:space:]]*(0|var\(--radius)')"

report ERROR "Sombras / glows" \
  "$(search '(^|[^a-z-])(shadow|drop-shadow|inset-shadow|text-shadow)(-[a-z0-9]+|-\[[^]]*\])' | grep -vE '(shadow|drop-shadow)-none'; search 'box-shadow:[[:space:]]*[^n]|filter:[^;]*drop-shadow')"

report ERROR "Colores de la paleta por defecto de Tailwind (no existen en el tema)" \
  "$(search "(^|[^a-z-])($PREFIX)-($PALETTE)(-[0-9]{2,3})?(/[0-9]+)?([^a-z0-9-]|$)")"

report ERROR "Colores literales (usa los tokens de marca)" \
  "$( { search '\[#[0-9a-fA-F]{3,8}\]|\[(rgb|rgba|hsl|oklch)\(' ; grep -rnE --include='*.vue' --include='*.css' "${EXCLUDES[@]}" '#[0-9a-fA-F]{3,8}\b' "${DIRS[@]}" 2>/dev/null | grep -vE 'main\.css|theme\.css|href="#|to="#|#[a-z]+-|id=' ; } | sort -u)"

report ERROR "Tamaños/tipos arbitrarios (usa la escala text-caption…text-display-lg)" \
  "$(search 'text-\[[0-9.]+(px|rem|em)\]|leading-\[|tracking-\[|font-\[')"

report WARN "Pesos fuertes (titulares en 300/400; 700 solo para una palabra enfatizada)" \
  "$(search '(^|[^a-z-])font-(semibold|extrabold|black|medium)([^a-z-]|$)|(^|[^a-z-])font-bold([^a-z-]|$)')"

report WARN "Gradientes (solo válidos como overlay oscuro sobre fotografía)" \
  "$(search '(^|[^a-z-])bg-(linear|radial|conic|gradient)-|linear-gradient|radial-gradient')"

report WARN "steel-mid (4.4:1): solo texto >=18px o decorativo" \
  "$(search 'text-steel-mid')"

report WARN "Bandas de acento: máximo una por página" \
  "$(grep -rcE --include='*.vue' "${EXCLUDES[@]}" 'bg-accent[^/]' "${DIRS[@]}" 2>/dev/null | grep -E '(pages|sections)/' | awk -F: '$2>1')"

echo ""
echo "Resumen: $errors error(es), $warnings aviso(s)."
[ "$errors" -gt 0 ] && exit 1
exit 0

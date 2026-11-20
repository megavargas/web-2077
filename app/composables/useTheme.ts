export type Theme = 'dark' | 'light'

/**
 * Modo de color de la web. Oscuro por defecto (marca); el claro intercambia marino y azul
 * muy claro y usa el azul de marca oscuro como acento (ver main.css, [data-theme='light']).
 * Se guarda en cookie para que el servidor pinte ya el modo elegido (sin parpadeo).
 */
export function useTheme() {
  const cookie = useCookie<Theme>('theme', {
    default: () => 'dark',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  const theme = computed<Theme>(() => (cookie.value === 'light' ? 'light' : 'dark'))
  const toggle = () => {
    cookie.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}

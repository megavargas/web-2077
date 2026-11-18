import { createHmac, timingSafeEqual } from 'node:crypto'

/** Duración del acceso tras introducir la contraseña: un día. */
export const PREVIEW_TTL = 60 * 60 * 24
export const PREVIEW_COOKIE = 'ctx_preview'

const sign = (secret: string, exp: string) =>
  createHmac('sha256', secret).update(`preview:${exp}`).digest('hex')

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

/** Token «caducidad.firma»: cambiar la contraseña invalida todos los accesos. */
export function createPreviewToken(secret: string, now = Date.now()) {
  const exp = String(Math.floor(now / 1000) + PREVIEW_TTL)
  return `${exp}.${sign(secret, exp)}`
}

export function isValidPreviewToken(secret: string, token?: string, now = Date.now()) {
  if (!token) return false
  const [exp, sig] = token.split('.')
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) * 1000 < now) return false
  return safeEqual(sig, sign(secret, exp))
}

export function checkPreviewPassword(secret: string, input: unknown) {
  return typeof input === 'string' && safeEqual(input, secret)
}

/** Solo rutas internas como destino tras el acceso. */
export function safeNext(next: unknown) {
  return typeof next === 'string' && next.startsWith('/') && !next.startsWith('//') ? next : '/'
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

export function previewPage(next: string, error: boolean) {
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Contextual · Acceso privado</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<style>
*{box-sizing:border-box;margin:0}
body{min-height:100svh;display:grid;place-items:center;padding:16px;background:#0c1829;color:#f5f5f5;font-family:Archivo,ui-sans-serif,system-ui,sans-serif}
main{width:100%;max-width:400px;display:flex;flex-direction:column;gap:24px}
.mono{font-family:'Chivo Mono',ui-monospace,Menlo,monospace;font-size:14px;text-transform:uppercase;letter-spacing:.04em}
.brand{letter-spacing:.2em}
h1{font-weight:300;font-size:36px;line-height:1.1}
p{color:#c2cad8;line-height:1.4}
form{display:flex;flex-direction:column;gap:12px}
label{color:#c2cad8}
input{width:100%;padding:12px 16px;border:1px solid #2b3d58;background:#13233a;color:#f5f5f5;font-size:16px;border-radius:0}
input:focus{outline:1px solid #f5f5f5;outline-offset:2px;border-color:#f5f5f5}
button{padding:10px 16px;border:1px solid #00aff0;background:#00aff0;color:#0c1829;cursor:pointer;border-radius:0}
button:hover{background:#f5f5f5;border-color:#f5f5f5}
button:focus-visible{outline:1px solid #f5f5f5;outline-offset:2px}
.error{color:#ff9a66}
</style></head>
<body><main>
<p class="mono brand">Contextual</p>
<h1>Acceso privado<br><span lang="en">Private preview</span></h1>
<p>Esta web está en revisión. Introduce la contraseña para verla durante 24 horas.<br><span lang="en">Enter the password to view it for 24 hours.</span></p>
<form method="post" action="/__preview">
<label class="mono" for="password">Contraseña · <span lang="en">Password</span></label>
<input id="password" name="password" type="password" autocomplete="current-password" required autofocus${error ? ' aria-invalid="true" aria-describedby="error"' : ''}>
${error ? '<p id="error" class="error" role="alert">Contraseña incorrecta · <span lang="en">Wrong password</span></p>' : ''}
<input type="hidden" name="next" value="${escapeHtml(next)}">
<button class="mono" type="submit">Entrar · <span lang="en">Enter</span></button>
</form>
</main></body></html>`
}

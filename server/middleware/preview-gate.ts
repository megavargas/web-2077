/*
 * Contraseña general para enseñar la web antes de publicarla (NUXT_PREVIEW_PASSWORD).
 * Sin la variable no hace nada. Con ella, todo el sitio pide la contraseña y, al acertar,
 * deja una cookie firmada válida 24 horas. Mientras está activa, nada se indexa.
 */
export default defineEventHandler(async (event) => {
  const secret = useRuntimeConfig(event).previewPassword
  if (!secret) return

  setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true })

  if (url.pathname === '/__preview' && event.method === 'POST') {
    const body = await readBody<{ password?: unknown; next?: unknown }>(event)
    const next = safeNext(body?.next)
    if (checkPreviewPassword(secret, body?.password)) {
      setCookie(event, PREVIEW_COOKIE, createPreviewToken(secret), {
        httpOnly: true,
        secure: url.protocol === 'https:',
        sameSite: 'lax',
        path: '/',
        maxAge: PREVIEW_TTL,
      })
      return sendRedirect(event, next, 303)
    }
    // Freno sencillo a la fuerza bruta
    await new Promise((r) => setTimeout(r, 1000))
    setResponseStatus(event, 401)
    setResponseHeader(event, 'Content-Type', 'text/html; charset=utf-8')
    return previewPage(next, true)
  }

  if (isValidPreviewToken(secret, getCookie(event, PREVIEW_COOKIE))) return

  setResponseStatus(event, 401)
  setResponseHeader(event, 'Content-Type', 'text/html; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'no-store')
  return previewPage(url.pathname + url.search, false)
})

import { contactSchema } from '#shared/contact'

/**
 * Recibe el formulario de contacto, lo valida y lo reenvía al webhook configurado
 * (NUXT_CONTACT_WEBHOOK_URL: CRM, automatización o servicio de email).
 * Sin webhook configurado responde 503 y la web ofrece el email como alternativa.
 */
export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) => contactSchema.safeParse(body))
  if (!result.success) {
    throw createError({ statusCode: 422, statusMessage: 'Invalid contact request' })
  }

  const { website, consent, ...data } = result.data

  // Bots que rellenan el honeypot: respuesta normal, sin reenviar nada.
  if (website) return { ok: true }

  const { contactWebhookUrl } = useRuntimeConfig(event)
  if (!contactWebhookUrl) {
    throw createError({ statusCode: 503, statusMessage: 'Contact delivery is not configured' })
  }

  await $fetch(contactWebhookUrl, {
    method: 'POST',
    body: { ...data, consent, receivedAt: new Date().toISOString() },
  })

  return { ok: true }
})

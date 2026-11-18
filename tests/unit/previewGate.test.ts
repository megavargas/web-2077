import { describe, expect, it } from 'vitest'
import {
  PREVIEW_TTL,
  checkPreviewPassword,
  createPreviewToken,
  isValidPreviewToken,
  safeNext,
} from '../../server/utils/previewGate'

describe('contraseña de vista previa', () => {
  const now = Date.UTC(2026, 10, 18)

  it('el token vale 24 horas y luego caduca', () => {
    const token = createPreviewToken('secreto', now)
    expect(isValidPreviewToken('secreto', token, now)).toBe(true)
    expect(isValidPreviewToken('secreto', token, now + (PREVIEW_TTL - 60) * 1000)).toBe(true)
    expect(isValidPreviewToken('secreto', token, now + (PREVIEW_TTL + 60) * 1000)).toBe(false)
  })

  it('rechaza tokens manipulados o de otra contraseña', () => {
    const token = createPreviewToken('secreto', now)
    const [exp, sig] = token.split('.')
    expect(isValidPreviewToken('otra', token, now)).toBe(false)
    expect(isValidPreviewToken('secreto', `${Number(exp) + 999}.${sig}`, now)).toBe(false)
    expect(isValidPreviewToken('secreto', 'basura', now)).toBe(false)
    expect(isValidPreviewToken('secreto', undefined, now)).toBe(false)
  })

  it('compara la contraseña exacta', () => {
    expect(checkPreviewPassword('secreto', 'secreto')).toBe(true)
    expect(checkPreviewPassword('secreto', 'secret')).toBe(false)
    expect(checkPreviewPassword('secreto', undefined)).toBe(false)
  })

  it('solo redirige a rutas internas', () => {
    expect(safeNext('/services?x=1')).toBe('/services?x=1')
    expect(safeNext('//evil.com')).toBe('/')
    expect(safeNext('https://evil.com')).toBe('/')
    expect(safeNext(undefined)).toBe('/')
  })
})

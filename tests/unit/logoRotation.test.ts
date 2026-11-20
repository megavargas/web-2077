import { describe, expect, it } from 'vitest'
import { createLogoRotation, rotateLogo, syncLogoRotation } from '~/utils/logoRotation'

const visibleOf = (s: { slots: number[] }, v: number) => s.slots.slice(0, v)

describe('logoRotation', () => {
  it('empieza con los primeros logos en orden y el resto en cola', () => {
    const s = createLogoRotation(19, 12)
    expect(s.slots).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    expect(s.queue).toEqual([12, 13, 14, 15, 16, 17, 18])
  })

  it('cambia una celda por el siguiente en cola y nunca repite un logo visible', () => {
    let s = syncLogoRotation(createLogoRotation(19, 12), 19, 6)
    for (let n = 0; n < 200; n++) {
      s = rotateLogo(s, 19, 6, n % 6)
      const shown = visibleOf(s, 6)
      expect(new Set(shown).size).toBe(6)
      expect(shown.some((i) => s.queue.includes(i))).toBe(false)
      expect(s.queue.length).toBe(13)
    }
  })

  it('acaba mostrando todos los logos', () => {
    let s = syncLogoRotation(createLogoRotation(19, 12), 19, 6)
    const seen = new Set(visibleOf(s, 6))
    for (let n = 0; n < 13; n++) {
      s = rotateLogo(s, 19, 6, n % 6)
      visibleOf(s, 6).forEach((i) => seen.add(i))
    }
    expect(seen.size).toBe(19)
  })

  it('al agrandar la ventana, las celdas ocultas no duplican las visibles', () => {
    let s = syncLogoRotation(createLogoRotation(19, 12), 19, 6)
    for (let n = 0; n < 7; n++) s = rotateLogo(s, 19, 6, n % 6)
    s = syncLogoRotation(s, 19, 12)
    expect(new Set(visibleOf(s, 12)).size).toBe(12)
  })

  it('no rota si no hay logos en espera o la celda no es visible', () => {
    const few = createLogoRotation(4, 6)
    expect(rotateLogo(syncLogoRotation(few, 4, 4), 4, 4, 0).slots.slice(0, 4)).toEqual([0, 1, 2, 3])
    const s = createLogoRotation(19, 12)
    expect(rotateLogo(s, 19, 6, 8)).toBe(s)
  })

  it('si caben todos los logos, los muestra todos y no rota', () => {
    const s = createLogoRotation(18, 18)
    expect(new Set(visibleOf(s, 18)).size).toBe(18)
    expect(s.queue).toEqual([])
    expect(rotateLogo(s, 18, 18, 3)).toBe(s)
  })
})

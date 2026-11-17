import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import UiButton from '~/components/ui/UiButton.vue'

describe('UiButton', () => {
  it('renderiza un <button type="button"> por defecto con la variante filled', async () => {
    const wrapper = await mountSuspended(UiButton, { slots: { default: () => 'Contacto' } })
    const el = wrapper.find('button')
    expect(el.exists()).toBe(true)
    expect(el.attributes('type')).toBe('button')
    expect(el.classes()).toContain('bg-accent')
    expect(el.text()).toBe('Contacto')
  })

  it('renderiza un enlace externo con href', async () => {
    const wrapper = await mountSuspended(UiButton, {
      props: { href: 'https://example.com', variant: 'ghost' },
      slots: { default: () => 'Ir' },
    })
    const el = wrapper.find('a')
    expect(el.attributes('href')).toBe('https://example.com')
    expect(el.attributes('type')).toBeUndefined()
    expect(el.classes()).toContain('border-bone-white')
  })

  it('renderiza un enlace interno localizado con to', async () => {
    const wrapper = await mountSuspended(UiButton, {
      props: { to: '/' },
      slots: { default: () => 'Contacto' },
    })
    expect(wrapper.find('a').attributes('href')).toBe('/')
  })
})

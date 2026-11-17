import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SectionHero from '~/components/sections/SectionHero.vue'

const hero = {
  eyebrow: 'Consultoría',
  titleLines: [
    { text: 'Somos', emphasis: false },
    { text: 'inteligencia', emphasis: false },
    { text: 'aplicada.', emphasis: true },
  ],
  subtitle: 'Tu contexto, nuestra inteligencia.',
  proof: 'Desde 2016.',
  primaryCta: 'Diagnóstico',
  secondaryCta: 'Servicios',
}

describe('SectionHero', () => {
  it('apila el titular en líneas y resalta la marcada', async () => {
    const wrapper = await mountSuspended(SectionHero, { props: { hero } })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Somos inteligencia aplicada.')
    expect(h1.findAll('span.block')).toHaveLength(3)
    expect(h1.find('span.text-accent').text()).toBe('aplicada.')
  })

  it('enlaza los CTA al diagnóstico y a servicios', async () => {
    const wrapper = await mountSuspended(SectionHero, { props: { hero } })
    const hrefs = wrapper.findAll('a').map((a) => a.attributes('href'))
    expect(hrefs).toEqual(['/services/assessment', '/services'])
  })
})

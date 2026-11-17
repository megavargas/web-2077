import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SectionHero from '~/components/sections/SectionHero.vue'

const hero = {
  eyebrow: 'Consultoría',
  title: 'Inteligencia con {emphasis}.',
  emphasis: 'contexto',
  subtitle: 'Sub',
  primaryCta: 'Diagnóstico',
  secondaryCta: 'Servicios',
}

describe('SectionHero', () => {
  it('compone el titular con la palabra enfatizada en el color de acento', async () => {
    const wrapper = await mountSuspended(SectionHero, { props: { hero } })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Inteligencia con contexto.')
    expect(h1.find('span.text-accent').text()).toBe('contexto')
  })

  it('enlaza los CTA al diagnóstico y a servicios', async () => {
    const wrapper = await mountSuspended(SectionHero, { props: { hero } })
    const hrefs = wrapper.findAll('a').map((a) => a.attributes('href'))
    expect(hrefs).toEqual(['/servicios/diagnostico', '/servicios'])
  })
})

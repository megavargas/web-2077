// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Las props opcionales tipadas con TS ya son `undefined` por defecto.
    'vue/require-default-prop': 'off',
  },
})

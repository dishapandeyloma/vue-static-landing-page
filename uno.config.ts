// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // default atomic utility classes
    presetAttributify(), // use utility classes as attributes
    presetIcons(), // adds icon support (e.g., i-carbon-add)
  ],
})

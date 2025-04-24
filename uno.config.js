// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['fullScreen', 'w-1920 h-1080'],
    ['f-c-c', 'flex justify-center items-center'],
    ['f-c-b', 'flex justify-between items-center'],
    ['flex-col', 'flex flex-col'],
    ['text-ellipsis', 'truncate'],
    ['blueGradient', { background: 'linear-gradient(180deg, #38578F 0%, #101929 100%)' }],
  ],
})

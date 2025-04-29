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
    ['goldenGradient', { background: 'linear-gradient(180deg, #A87C25 0%, #553E12 100%)' }],
    [
      'gradient-gold-text',
      'text-transparent bg-clip-text bg-[linear-gradient(180deg,_#A87C25_0%,_#553E12_100%)]',
    ],
  ],
  theme: {
    colors: {
      primary: '#A57A24',
      secondary: '#A87C25',
    },
  },
})

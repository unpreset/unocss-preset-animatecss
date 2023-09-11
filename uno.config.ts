import { defineConfig, presetUno } from 'unocss'
import { presetAnimateCSS } from './src'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        './**/*.{vue,ts,tsx,js,jsx}',
      ],
    },
  },
  presets: [
    presetUno(),
    presetAnimateCSS({
      prefix: 'animate-',
    }),
  ],
})

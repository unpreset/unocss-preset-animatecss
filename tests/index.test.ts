import { createGenerator } from 'unocss'
import { test } from 'vitest'
import { presetAnimateCSS } from '../src'

test('preset-animatecss', async () => {
  const uno = createGenerator({
    presets: [presetAnimateCSS()],
  })
  const root = await uno.generate('animate__backInDown animate__animated')
})

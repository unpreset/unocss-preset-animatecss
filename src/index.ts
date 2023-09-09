import type { CSSObject, Preset, Rule } from 'unocss'
import { definePreset } from 'unocss'
import postcss from 'postcss'
import { objectify, parse } from 'postcss-js'
import animatecss from './animatecss'

const kebabcase = (str: string) => str.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`)

function toCSSProperties(obj: Record<string, any>) {
  const rs: CSSObject = {}
  Object.entries(obj).forEach(([key, value]) => {
    const k = kebabcase(key)
    if (Array.isArray(value))
      rs[k] = value.join(' ')
    else
      rs[k] = value
  })
  return rs
}

export function presetAnimateCSS(): Preset {
  const root = postcss.parse(animatecss)

  const obj = objectify(root)

  const rootStyle = obj[':root']

  const staticRules: [string, CSSObject][] = []

  const keyframes: any[] = []

  for (const [name, body] of Object.entries(obj)) {
    if (name.startsWith('.animate__'))
      staticRules.push([name.slice(1), body])
    else if (name.startsWith('@keyframes'))
      keyframes.push([name.replace('@keyframes', '').trim(), body])
  }

  return definePreset({
    name: 'unocss-preset-starter',
    preflights: [
      {
        layer: 'animate',

        getCSS: () => {
          return parse({
            ':root': rootStyle,
          }).toString()
        },
      },
    ],
    layers: {
      animate: -1,
    },
    rules: [
      ...staticRules.map(([name, body]) => {
        const animateName = body.animationName as string | undefined
        if (animateName) {
          const keyframe = keyframes.find(([k]) => k === animateName)
          if (keyframe) {
            const keyframeCSS = `@keyframes ${animateName} {\n${parse(keyframe[1]).toString()}}`
            return [new RegExp(`^${name}`),
              () => {
                return [{
                  'animation-name': animateName,
                }, keyframeCSS]
              },
            ]
          }
        }
        return [name, toCSSProperties(body)]
      }) as Rule[],
    ],
  })
}

export default presetAnimateCSS

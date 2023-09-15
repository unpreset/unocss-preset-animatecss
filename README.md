# unocss-preset-animatecss [![npm](https://img.shields.io/npm/v/unocss-preset-animatecss)](https://npmjs.com/package/unocss-preset-animatecss)


## Features
- 🔥 Animate.css Preset for UnoCSS

## Usage
```shell
pnpm i -D unocss-preset-animatecss unocss
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetAnimateCSS } from 'unocss-preset-animatecss'

export default defineConfig({
  presets: [
    // ...
    presetAnimateCSS(),
  ],
})
```

```html
<!-- Input -->
<div class="animate__animated animate__bounce">Bounce</div>
```
```css
/* Output */
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.animate__bounce {
  animation-name: bounce;
}

```


## Rules

- animate__animated
- animate__`[animationName]`
- animate__delay-`[delay]`
- animate__duration-`[duration]`
- animate__repeat-`[repeat]`
- animate__infinite
- animate__fast
- animate__faster
- animate__slow
- animate__slower

## Credits
- [Animate.css](https://animate.style/)
- [UnoCSS](https://unocss.dev/)

## License

[MIT](./LICENSE) License © 2023 [chizukicn](https://github.com/chizukicn)

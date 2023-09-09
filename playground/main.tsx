import { createApp, ref } from 'vue'
import 'uno.css'

type ModeType = 'light' | 'dark' | 'cafe'

createApp({
  setup() {
    const modes: ModeType[] = ['light', 'dark', 'cafe']

    const index = ref(0)

    function toggle() {
      index.value = index.value + 1
      if (index.value >= modes.length)
        index.value = 0
    }

    return () => (
      <div class="bg-secondary duration-300 flex h-full w-full items-center justify-center">
          <div class="bg-white text-pink-3 text-4xl animate__backInDown animate__animated" >
            Animate
          </div>
      </div>
    )
  },
}).mount('#app')

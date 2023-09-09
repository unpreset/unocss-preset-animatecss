import { createApp } from 'vue'
import 'uno.css'

createApp({
  setup() {
    return () => (
      <div class="bg-secondary duration-300 flex h-full w-full items-center justify-center">
          <div class="bg-white text-pink-3 text-4xl animate__backInDown animate__animated" >
            Animate
          </div>
      </div>
    )
  },
}).mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

AOS.init()

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
  theme: 'dark',
})

app.mount('#app')

createApp(App).mount('#app')

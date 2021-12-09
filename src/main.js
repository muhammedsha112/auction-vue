import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Categories from '@/components/Categories.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('Categories', Categories)
app.mount('#app')



import "bootstrap/dist/js/bootstrap.js"
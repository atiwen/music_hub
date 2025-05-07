import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store/index'
import routes  from './route/route'

// const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


// const app = createApp(App)

app.use(router)
// app.use(pinia)
app.use(store)
app.mount('#app')


// createApp(App).use(router).use(pinia).mount('#app')

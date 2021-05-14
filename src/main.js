import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Edit from './pages/Edit.vue'

//Router
Vue.use(VueRouter)

const routes = [
	{ path: '/home', component: Home},
	{ path: '/about', component: About},
	{ path: '/edit', component: Edit}
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

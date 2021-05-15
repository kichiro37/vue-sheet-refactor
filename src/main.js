import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Edit from './pages/Edit.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

//Router
const routes = [
	{ path: '/home', component: Home},
	{ path: '/about', component: About},
	{ path: '/edit', component: Edit}
]

const router = new VueRouter({
	routes
})

//Vuex

const store = new Vuex.Store({
	state: {
		count: 0,
		InfoUser: {}
	},
	mutations: {
		increment (state) {
			state.count++	
		},
		decrement (state) {
			state.count--
		},
		reset (state) {
			state.count = 0
		},
		SaveInfoUser (state, data) {
			state.InfoUser = data
		}
	}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

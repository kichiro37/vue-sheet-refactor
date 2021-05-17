import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Edit from './pages/Edit.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

//axios

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

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
	},
	actions: {
		GetEmployees() {
			return new Promise ((resolve, reject) => {
				console.log('GetEmployees main.js 0')
				axios.get('/users')
				.then ( resp => {
					console.log('GetEmployees main.js 1T', resp)
					resolve(resp.data)
				})
				.catch ( err => {
					console.log('GetEmployees main.js 1F', err)
					reject(err)
				})
			})
		}
	}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

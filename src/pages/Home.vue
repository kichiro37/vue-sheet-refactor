<template>
  <div>
	<div id="home">
		SELAMAT HOME GAN! <br>
	</div>
	<div class="container">
		{{hitung}} <br>
		<button v-on:click="increment">add</button>
		<button v-on:click="reset">reset</button>
		<button v-on:click="decrement">decrement</button>
	</div>
	<userinfo />
  </div>
</template>

<script>

import userinfo from '../components/UserInfo.vue'

export default {
  name: 'Home',
  components: {
	userinfo
  },
  computed: {
	hitung() {
		return this.$store.state.count
	}
},
  methods: {
	increment() {
		this.$store.commit('increment')
	},
	decrement() {
		this.$store.commit('decrement')
	},
	reset() {
		this.$store.commit('reset')
	}
}

}
</script>

<style>
#home {
 background-color: blue;
 color: white;
}
.container {
	margin-top : 10px
}
</style>

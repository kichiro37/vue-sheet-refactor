<template>
  <div>
	<div id="about">
		SELAMAT ABOUT GAN! <br>
	</div>
	<div>
		<button class="Employees-button" @click="GetEmployees"> Get Employees </button>
	</div>
	<div class="Employees-container" v-for="employee in employees" v-bind:key="employee.id">
		{{employee.id}} || {{employee.name}}
	</div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {

  },
  data() {
	return {
		employees: []
	}
  },
  methods: {
  //Cara Get Employes versi Async await
	async GetEmployees() {
		console.log('GetEmployees About 0', this.employees)
		try {
			this.employees = await this.$store.dispatch('GetEmployees')
		} catch (err) {
			alert('error')
		}
		console.log('GetEmployees About 1', this.employees)
	},
	//Cara Get Employes versi Then
	GetEmployeesThen() {
		console.log('GetEmployees About 0', this.employees)
		this.$store.dispatch('GetEmployees')
		.then(resp => {
			this.employees = resp
		})
		.catch(() => {
			alert('error')
		})
		console.log('GetEmployees About 1', this.employees)
	}
}
}
</script>

<style>
#about {
 background-color: purple;
 color: white;
}
.Employees-button {
	margin-top: 10px;
	margin-bottom: 10px
}
.Employees-container {
	border: solid 1px;
	margin: 0 30%;
	display: flex;
	justify-content: space-between
}
</style>

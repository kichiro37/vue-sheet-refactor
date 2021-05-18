<template>
  <div>
	<div id="about">
		SELAMAT ABOUT GAN! <br>
	</div>
	<div>
		<button class="Employees-button" @click="GetEmployees"> Get Employees </button>
	</div>
	<div class="Employees-container">
		<div class="Employees-informasi">	
			<input type="text" v-model="name" class="employees-textfield" placeholder="Nama employee" />
			<input type="submit" label="add" @click="AddEmployee">
		</div>
		<div class="Employees-informasi" v-for="(employee, employeeIndex) in employees" v-bind:key="employee.id">
				<Employee
				:employee="employee"
				:employeeIndex="employeeIndex"
				@delete-employee="OnDeleteEmployee"
				@update-employee="OnUpdateEmployee"/>
		</div>	
	</div>
  </div>
</template>

<script>

import Employee from '../components/Employee.vue'
export default {

  name: 'About',
  components: {
	Employee
  },
  data() {
	return {
		employees: [],
		name: null
	}
  },
  created() {
		this.GetEmployees()
  },
  methods: {
  //Cara Get Employees versi Async await
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
	},
	async AddEmployee() {
		try {
			const params = {
				name: this.name
			}
			const employee = await this.$store.dispatch('AddEmployee', params)
			this.employees.push(employee)
			this.name = ''
			alert('Tambah Data Tersimpan')
		}
		catch (err) {
			alert('Oops Data tidak Tersimpan')
		}
	},
	OnDeleteEmployee(employeeIndex) {
		alert(employeeIndex)
		this.employees.splice(employeeIndex, 1)
	},
	OnUpdateEmployee(employee) {
		this.employees[employee.index].name = employee.name
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
.Employees-informasi {
	border: solid 1px;
	margin: 0 30%;
	display: flex;
	justify-content: space-between
}
.employees-textfield {
	width: 90%
}
</style>

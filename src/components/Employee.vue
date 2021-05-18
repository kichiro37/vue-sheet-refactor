<template>
	<div>
		<button v-on:click="$emit('delete-employee', employeeIndex)"> X </button>
		<button @click="UpdateEmployee(employeeIndex, employee.name)"> Edit</button>
		{{employeeIndex}} || {{employee.id}} || {{employee.name}}
	</div>
</template>

<script>

export default {
  name: 'Employee',
  props: {
		employee: Object,
		employeeIndex: Number
  },
  methods: {
		UpdateEmployee(employeeIndex, name) {
			const new_name = prompt ('Nama Baru', name)
			const params = {
				index : employeeIndex,
				name : new_name
			}
			this.$emit('update-employee', params)
		}
  }
}
</script>

<style>

</style>

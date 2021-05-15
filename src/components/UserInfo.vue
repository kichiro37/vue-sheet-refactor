<template>
  <div class="output">
		<div>
			Nama : {{ paramsInfo.nama }}
		</div>
		<div>
			Biodata : {{ paramsInfo.biodata }}
		</div>
		<div>
			Hobby : <span v-for="hobby in paramsInfo.hobbies" v-bind:key="hobby"> {{hobby}} </span>
		</div>
		<div>
			Kelamin : {{ paramsInfo.kelamin }}
		</div>
		<div>
			Aplikasi : <span v-for="aplikasi in paramsInfo.aplikasis" v-bind:key="aplikasi"> {{aplikasi}} </span>
		</div>
	</div>
</template>

<script>

export default {
  name: 'userinfo',
	computed: {
	paramsInfo() {
		return this.$store.state.InfoUser
	}
}
}
</script>

<style>
.output {
	margin-top: 10px;
	border: solid 1px green;
	padding: 50px;
	margin: 0 30%;
	text-align: left;
}
</style>

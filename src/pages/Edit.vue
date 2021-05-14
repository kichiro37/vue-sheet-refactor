<template>
  <div>
	<div id="edit">
		SELAMAT EDIT GAN! <br>	
	</div>
	<div class="form-input">
		<div class="input">
			Nama : 
			<input v-model="nama" placeholder="Nama Lengkap">
		</div>
		<div class="input">
			Biodata : 
			<textarea v-model="biodata" placeholder="Biodata"></textarea>
		</div>
		<div class="input">
			Hobby :	
			<input type="checkbox" id="Game" value="Game" v-model="checkedNames">
			<label for="Game"> Game </label>
			<input type="checkbox" id="Gelud" value="Gelud" v-model="checkedNames">
			<label for="Gelud"> Gelud </label>
			<input type="checkbox" id="Makan" value="Makan" v-model="checkedNames">
			<label for="Makan"> Makan </label>
			<input type="checkbox" id="Tidur" value="Tidur" v-model="checkedNames">
			<label for="Tidur"> Tidur </label>
		</div>
		<div class="input">
			Kelamin :	
			<input type="radio" id="Laki-laki" value="Laki-laki" v-model="picked">
			<label for="Laki-laki">Laki-laki</label>
			<input type="radio" id="Perempuan" value="Perempuan" v-model="picked">
			<label for="Perempuan">Perempuan</label>
		</div>
		<div class="input">
			Aplikasi :
			<select v-model="selected" multiple>
				<option>Blibli</option>
				<option>Tokopedia</option>
				<option>Shope</option>
				<option>BukaLapak</option>
				<option>OLX</option>
			</select>
		</div>
	</div>
	<div class="button">
		<button @click="simpan"> Simpan</button>
	</div>
	<div class="output">
		<div>
			Nama : {{ nama }}
		</div>
		<div>
			Biodata : {{ biodata }}
		</div>
		<div>
			Hobby : {{ checkedNames }}
		</div>
		<div>
			Kelamin : {{ picked }}
		</div>
		<div>
			Aplikasi : {{ selected }}
		</div>
	</div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  components: {

  },
  data() {
	return {
		nama : null,
		biodata : null,
		checkedNames : [],
		picked : null,
		selected : []
	}
  },
  methods: {
	simpan(){
	alert(`Data ${this.nama} Tersimpan`)
	}
}
}
</script>

<style>
#edit {
 background-color: green;
 color: white;
}
.form-input {
	margin-top: 10px
}
.input {
	margin-top: 10px
}
.button {
	margin-top: 10px;
	margin-bottom: 10px;
}
.output {
	margin-top: 10px;
	border: solid 1px green;
	padding: 50px;
	margin: 0 30%;
	text-align: left;
}
</style>

<template>
  <div>
    <div id="header">
      SELAMAT DATANG! <br>
      <router-link to="/home"> Home </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/edit"> Edit </router-link>
    </div>
    <div class="route">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {

  }
}
</script>

<style>
#header {
 background-color: red;
 color: white;
}
.route {
  margin-top: 10px
}
</style>

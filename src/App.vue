<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/views/Home.vue'
import GetStarted from './components/views/GetStarted.vue';
</script>

<template>
  <Header />
  <!-- <Home /> -->
  <router-view></router-view>
  <!-- <GetStarted /> -->
  <Footer />
</template>


<script>
export default {
  name: 'home',
  mounted() {
    if (localStorage.getItem("accessToken") == null) {
      this.$router.push('/getstarted');
      console.log("Access token  is null")
  }
}
}

</script>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
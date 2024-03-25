<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/views/Home.vue";
import GetStarted from "./components/views/GetStarted.vue";
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
  name: "home",
  mounted() {
    //   if (localStorage.getItem("access_token") === null) {
    //     this.$router.push('/getstarted');
    //     console.log("Access token  is null")
    // }
  },
};
</script>

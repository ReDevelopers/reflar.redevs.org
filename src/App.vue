<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
@import "assets/styles/main.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

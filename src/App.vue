<template>
  <div id="app">
    <div class="nprogress-container"></div>
    <Navbar />
    <div class="container">
      <transition name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <vue-progress-bar />
  </div>
</template>

<style lang="less">
@import "assets/styles/transitions.less";
@import "assets/styles/main.less";
@import "assets/styles/index.less";

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
  text-align: left;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();

    window.router = this.$router;

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress) {
        const meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }

      this.$Progress.start();
      next();
    });

    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>

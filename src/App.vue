<template>
  <div id="app">
    <Navbar />
    
    <div id="content">
      <transition name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>

    <vue-progress-bar />
  </div>
</template>

<style lang="scss">
@import "assets/styles/bulma.scss";
</style>

<style lang="less">
@import "assets/styles/index.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

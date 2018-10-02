<template>
  <nav id="navbar" class="flex items-center justify-between flex-wrap p-4">
    <div class="inline-block text-xl tracking-tight">
      <router-link to="/">
        <img alt="ReFlar logo" src="../assets/logo.png" />
      </router-link>
    </div>
    <div>
      <router-link to="/about" class="no-underline hover:underline mr-4 text-sm">About</router-link>
      <router-link to="/extensions" class="no-underline hover:underline mr-4 text-sm">Extensions</router-link>
      <router-link to="/members" class="no-underline hover:underline mr-4 text-sm">Members</router-link>
      
      <a href="https://github.com/ReFlar" class="no-underline hover:underline mr-4 text-sm" target="_blank">GitHub</a>
    </div>
  </nav>
</template>

<style lang="less">
#navbar {
  background-color: #263238;
  margin-bottom: 20px;

  a {
    color: white;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  img {
    height: 30px;
  }
}
</style>

<script>
export default {
  name: "Navbar"
};
</script>

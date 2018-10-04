<template>
  <nav id="navbar" class="flex flex-no-wrap items-center justify-between lg-auto p-4">
    <div class="flex-no-shrink inline-block">
      <router-link to="/">
        <img alt="ReFlar Logo" src="../assets/logo.png" />
      </router-link>
    </div>
    <div>
      <router-link to="/about" class="no-underline hover:underline mr-4 text-sm">About</router-link>
      <router-link to="/extensions" class="no-underline hover:underline mr-4 text-sm">Extensions</router-link>
      <router-link to="/members" class="no-underline hover:underline mr-4 text-sm">Members</router-link>
      
      <a href="https://github.com/ReFlar" class="no-underline hover:underline mr-4 text-sm" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </nav>
</template>

<style lang="less">
#navbar {
  padding-left: 5%;
  padding-right: 5%;
  background-color: #263238;
  margin-bottom: 20px;
  text-transform: uppercase;

  a {
    color: white;
    font-weight: bold;
    transition: color 0.25s linear;

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

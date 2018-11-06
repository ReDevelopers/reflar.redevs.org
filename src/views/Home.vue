<template>
  <div id="Home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            ReFlar
          </h1>
          <h2 class="subtitle">
            Creating Quality Flarum Extensions.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$height: calc(100vh - 4rem - 60px);

#Home {
  margin-top: -20px;
  min-height: 200px;
  height: $height;
  max-height: $height;

  .hero {
    height: 100%;
  }

  .hero-body .subtitle {
    padding-top: 2rem;
    line-height: 1.5;
  }
}
</style>

<script>
export default {
  name: "home"
};
</script>

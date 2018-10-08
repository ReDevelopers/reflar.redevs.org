<template>
  <div id="NotFound">
    <div class="alert" role="alert">
      <div class="flex">
        <div class="py-2 text-red">
          <icon name="exclamation-circle" scale="2" />
        </div>
        <div class="px-4">
          <h2 class="font-bold py-1">404 Not Found</h2>
          <p class="text-sm py-1">The requested page was not found.</p>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h3 class="py-2">Are you lost?</h3>
      <p class="text-base">Here are some links you may find helpful:</p>
      <ul>
        <router-link tag="li" to="/"><a>Home</a></router-link>
        <router-link tag="li" to="/about"><a>About</a></router-link>
        <router-link tag="li" to="/extensions"><a>Extensions</a></router-link>
        <router-link tag="li" to="/members"><a>Members</a></router-link>
      </ul>
      <ul>
        <li><a href="https://github.com/ReFlar" target="_blank" rel="noreferrer">ReFlar GitHub</a></li>
        <li><a href="https://discuss.flarum.org" target="_blank" rel="noreferrer">Flarum Community</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
#NotFound {
  position: absolute;
  width: 100%;
  top: 66px;
  left: 0;

  .alert {
    @apply .bg-red-lightest .border-t-4 .border-red .rounded-b .text-red-darkest .px-4 .py-3 .shadow-md;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;

    h2 {
      @apply .text-base;
    }
  }

  ul {
    margin-top: 20px;

    li {
      margin-bottom: 5px;

      a {
        @apply .text-black .no-underline .mr-4 .text-sm;

        &:hover {
          @apply .underline;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "NotFound"
};
</script>

<template>
  <div id="Members" class="px-6 text-left">
    <div class="flex flex-wrap justify-center items-stretch">
      <div class="flex-grow member py-8 max-w-sm rounded overflow-hidden py-4 text-center" v-for="member in members" :key="member.name">
        <a :href="member.github && `https://github.com/${member.github}`" target="_blank">
          <img :src="`https://github.com/${member.github}.png`" :alt="member.name" class="rounded-full w-16" />
          <div class="px-6 py-4">
            <div class="font-bold text-lg mb-2">{{ member.name }}</div>
          </div>
        </a>
        <div class="px-6" v-if="member.roles">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-light text-grey-darker mr-2" v-for="role in member.roles" :key="role">
            {{ role }}
          </span>
        </div>
        <div class="px-6 py-4 description" v-if="member.description">
          <p class="text-grey-darker text-sm leading-loose">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#Members {
  .member {
    min-width: 300px;

    a[href^="http"] {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .description {
      max-width: 400px;
      position: relative;
      margin: 0 auto;
    }
  }
}
</style>


<script>
import members from "../data/members.yml";

export default {
  name: "Members",
  data: () => ({
    members
  })
};
</script>

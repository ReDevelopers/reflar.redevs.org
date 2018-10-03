<template>
  <div id="Members" class="px-6">
    <h1 class="py-2">Members</h1>
    <div class="items-list">
      <div class="card member py-8 overflow-hidden" v-for="member in members" :key="member.name">
        <a :href="member.github && `https://github.com/${member.github}`" target="_blank">
          <img v-lazy="`https://github.com/${member.github}.png`" :alt="member.name" class="rounded-full w-16 animated" />
          <div class="py-4">
            <div class="h-2">{{ member.name }}</div>
          </div>
        </a>
        <div v-if="member.roles">
          <span class="badge ml-2 mr-2" v-for="role in member.roles" :key="role">
            {{ role }}
          </span>
        </div>
        <div class="py-4 description" v-if="member.description">
          <p>{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

#Members {
  .member {
    width: 400px;
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

<template>
  <div id="Extensions">
    <h1 class="py-2">Extensions</h1>
    <div class="items-list">
      <div class="card py-8 overflow-hidden" v-for="ext in exts" :key="ext.name">
        <a :href="`https://flagrow.io/extensions/reflar/${ext.id}`" target="_blank" rel="noreferrer">
          <img v-lazy="`https://flagrow.io/storage/icons/reflar$${ext.img || ext.id}.png`" :alt="ext.name" class="rounded-full w-16 animated" />
          <div class="py-4">
            <div class="h-2">{{ ext.name }}</div>
          </div>
        </a>
        <div class="description" v-if="ext.description">
          <p>{{ ext.description }}</p>
        </div>
        <div class="py-4" v-if="ext.authors">
          <span class="badge ml-2 mr-2" v-for="member in ext.authors" v-if="member" :key="member.name || member">
            <a :href="member.github && `https://github.com/${member.github}`" target="_blank" rel="noreferrer">
              {{ member.name || member }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

#Extensions {
  .card {
    width: 400px;
  }
}
</style>


<script>
import members from "../data/members.yml";
import extensions from "../data/extensions.yml";

const exts = extensions.map(e => {
  e.authors = e.authors.map(
    author =>
      members.find(
        m => (m.name && m.name.toLowerCase() === author) || m.github === author
      ) || author
  );
  e.id = e.id || e.name.toLowerCase();
  return e;
});

export default {
  name: "Extensions",
  data: () => ({
    exts
  })
};
</script>

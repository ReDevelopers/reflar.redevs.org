<template>
  <div id="Extensions" class="container is-fluid">
    <h1 class="title">Extensions</h1>
    <div class="columns is-multiline">
      <div class="column extension" v-for="ext in exts" :key="ext.name">
        <div class="card">
          <div class="card-content">
            <a :href="`https://flagrow.io/extensions/reflar/${ext.id}`" target="_blank" rel="noreferrer">
              <img v-lazy="`https://flagrow.io/storage/icons/reflar$${ext.img || ext.id}.png`" :alt="ext.name" class="animated" />
              <p class="title">{{ ext.name }}</p>
            </a>
            <p class="description" v-if="ext.description">{{ ext.description }}</p>

            <div class="tags">
              <span class="tag" v-for="member in ext.authors" v-if="member" :key="member.name || member">
                <a :href="member.github && `https://github.com/${member.github}`" target="_blank" rel="noreferrer">
                  {{ member.name || member }}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

#Extensions {
  .extension {
    min-width: 400px;

    .card {
      width: 100%;
    }
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

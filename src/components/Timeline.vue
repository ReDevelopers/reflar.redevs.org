<template>
  <ul class="timeline">
    <li v-for="item in getItems" :key="item.title" :class="`timeline-item ${item.small && 'timeline-item-small'}`">
      <div class="timeline-image" v-if="item.image">
        <img v-lazy="item.image" class="animated" />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <p class="timeline-date" v-if="item.date">{{ formatDate(item.date) }}</p>
          <h4 class="timeline-title">
            <a :href="item.link" target="_blank">{{ item.title }}</a>
          </h4>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

.timeline {
  list-style: none;
  padding: 10px 0 10px;
  position: relative;

  &:before {
    background-color: #eee;
    bottom: 0;
    content: " ";
    left: 50px;
    margin-left: -1.5px;
    position: absolute;
    top: 0;
    width: 3px;
  }

  > li {
    margin-bottom: 5px;
    position: relative;

    &.timeline-item-small {
      display: flex;
      margin-bottom: 0;
      margin-top: -5px;

      .timeline-title {
        font-size: 1em;
      }

      .timeline-image img {
        margin-top: 5%;
        margin-left: 10%;
        width: 80%;
        height: 80%;
      }
    }

    > .timeline-panel {
      border-radius: 2px;
      margin-left: 75px;
      padding: 20px;
      position: relative;
    }

    .timeline-image {
      font-size: 1.4em;
      height: 50px;
      left: 50px;
      margin-left: -25px;
      position: absolute;
      top: 16px;
      width: 50px;
      z-index: 100;

      // &.has([lazy=loaded]) {
      // }

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;

        &[lazy="loaded"] {
          box-shadow: 0px 0px 5px #000000;
        }
      }
    }

    .timeline-date {
      font-size: 0.7em;
      color: #555;
    }

    .timeline-title {
      font-size: 1.1em;
    }
  }
}
</style>

<script>
import dayjs from "dayjs";

export default {
  name: "timeline",
  props: ["items"],

  computed: {
    getItems() {
      return this.items
        .slice()
        .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
    }
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format("MMMM D, YYYY");
    }
  }
};
</script>

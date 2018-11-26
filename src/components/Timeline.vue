<template>
  <div class="timeline">
    <div v-for="item in getItems" :key="item.title" :class="`timeline-item ${item.small && 'timeline-item-small'}`">
      <div class="timeline-opposite"></div>
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
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

.timeline {
  list-style: none;
  padding: 10px 0 10px;
  position: relative;
  font-size: 1.1em;

  &:before {
    background-color: #ccc;
    content: "";
    bottom: 50px;
    top: 50px;
    left: calc(50% - 1.5px);
    position: absolute;
    width: 3px;
  }

  .timeline-item {
    margin-bottom: 10px;
    position: relative;
    display: flex;
    flex-direction: row;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
      text-align: right;
    }

    &.timeline-item-small {
      margin-top: -5px;
      margin-bottom: 0;

      .timeline-title {
        font-size: 1em;
        font-weight: normal;
      }

      .timeline-image {
        height: 40px;
        width: 40px;
        margin-top: 5px;
        left: calc(50% - 20px);
      }
    }

    .timeline-panel,
    .timeline-opposite {
      flex: 1 1 100%;
    }

    .timeline-panel {
      border-radius: 2px;
      padding: 20px;
    }

    .timeline-image {
      font-size: 1.4em;
      top: 16px;
      height: 50px;
      width: 50px;
      z-index: 100;

      left: calc(50% - 25px);
      align-self: center;
      position: absolute;

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
      font-weight: 500;
    }
  }

  .timeline-item:nth-child(odd) .timeline-panel {
    margin-left: 96px;
  }

  .timeline-item:nth-child(even) .timeline-panel {
    margin-right: 96px;
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

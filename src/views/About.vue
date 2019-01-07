<template>
  <div id="About" class="container is-fluid">
    <h1 class="title">About</h1>

    <div class="content">
      <p>
        ReFlar is a Flarum 3rd party extension development group that primarily
        focuses on the Flarum extension ecosystem.
      </p>
      <p>
        Founded by Charlie (CDK2020) and Christian (Ralkage) in 2017, what
        started out as two eager people wanting to bring high quality and highly
        requested extensions to the Flarum community, ReFlar has been gifted
        with talented new members over the span of a year. From polls to
        gamification, ReFlar knows what forum communities want and need from
        what is not readily available in the beta stages of Flarum.
      </p>

      <h2 class="is-size-4">Following Our Work</h2>
      <p>
        You can find our extensions on
        <a href="/github" target="_blank">GitHub</a>. <br />
        You can also join our
        <a href="/discord" target="_blank">Discord</a> server for even more fun!
      </p>

      <h2 class="is-size-4">Contributing</h2>
      <p>
        You can apply to ReFlar by sending your application to
        <a href="mailto:apply@redevs.org">apply@redevs.org</a>.
      </p>

      <h2 class="is-size-4">Timeline</h2>
    </div>
    <Timeline :items="items" />
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
import Timeline from "../components/Timeline";
import items from "../data/timeline.yml";
import extensions from "../data/extensions.yml";
import members from "../data/members.yml";

export default {
  components: {
    Timeline
  },
  data: () => ({
    items: items
      .map(i => {
        if (i.extension) {
          const ext = extensions.find(
            ext => (ext.id || ext.name.toLowerCase()) == i.extension
          );
          if (!ext) return;

          const id = ext.id || ext.name.toLowerCase();

          i.title = ext.name;
          i.image = `https://flagrow.io/storage/icons/reflar$${ext.img ||
            id}.png`;
          i.link = `https://flagrow.io/extensions/reflar/${id}`;
          i.small = true;
          i.icon = "puzzle-piece";

          delete i.extension;
        } else if (i.member) {
          const member = members.find(m => (m.github || m.name) == i.member);

          i.title = member.name || member.github;
          i.image = `https://github.com/${member.github}.png`;
          i.icon =
            !i.action || i.action.toLowerCase() == "joined"
              ? "user-plus"
              : "user-minus";
          if (member.github) i.link = `https://github.com/${member.github}`;
        }

        return i;
      })
      .filter(Boolean)
  })
};
</script>

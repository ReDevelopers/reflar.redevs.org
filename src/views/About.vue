<template>
  <div id="About" class="container is-fluid">
    <h1 class="title">About</h1>

    <div class="content">
      <p>ReFlar is a Flarum 3rd party extension development group that primarily focuses on the Flarum extension ecosystem.</p>
      <p>
        Founded by Charlie (CDK2020) and Christian (Ralkage) in 2017, what started out as two eager people wanting to bring high quality and highly requested extensions to the Flarum community, ReFlar has been gifted with talented new members over the span of a year.
        From polls to gamification, ReFlar knows what forum communities want and need from what is not readily available in the beta stages of Flarum.
      </p>

      <h3 class="is-size-5">Following Our Work</h3>
      <p>
        You can find our extensions on <a href="/github" target="_blank">GitHub</a>.
        <br>
        You can also join our <a href="/discord" target="_blank">Discord</a> server for even more fun!
      </p>

      <h3 class="is-size-5">Contributing</h3>
      <p>You can apply to ReFlar by sending your application to <a href="mailto:apply@redevs.org">apply@redevs.org</a>.</p>
    </div>

    <div>
      <Timeline :items="items" />
    </div>
  </div>
</template>

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
    items: items.map(i => {
      if (i.extension) {
        const ext = extensions.find(ext => (ext.id || ext.name.toLowerCase()) == i.extension);
        if (!ext) return;

        const id = ext.id || ext.name.toLowerCase();

        i.title = ext.name;
        i.image = `https://flagrow.io/storage/icons/reflar$${ext.img || id}.png`;
        i.link = `https://flagrow.io/extensions/reflar/${id}`;
        i.small = true;

        delete i.extension;
      } else if (i.member) {
        const member = members.find(m => (m.github || m.name) == i.member);

        i.title = member.name || member.github;
        i.image = `https://github.com/${member.github}.png`;
        if (member.github) i.link = `https://github.com/${member.github}`;
      }

      return i;
    }).filter(Boolean),
  })
};
</script>

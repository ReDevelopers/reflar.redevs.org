import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "ReFlar"
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/extensions",
      name: "extensions",
      component: () =>
        import(/* webpackChunkName: "extensions" */ "./views/Extensions.vue")
    },
    {
      path: "/members",
      name: "members",
      component: () =>
        import(/* webpackChunkName: "members" */ "./views/Members.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title =
    to.meta.title || to.name.charAt(0).toUpperCase() + to.name.slice(1);
  next();
});

export default router;

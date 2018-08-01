import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active-exact",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro
    },
    {
      path: "/about-me",
      name: "about-me",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AboutMe.vue")
    }
  ]
});
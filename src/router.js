import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      if (to.hash) {
        position.selector = to.hash;

        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }

        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      props: true,
      component: Home
    },
    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "destination-details" */ "./views/DestinationDetails.vue"
        ),
      children: [
        {
          path: ":experienceSlug",
          name: "ExperienceDetails",
          props: true,
          component: () =>
            import(
              /* webpackChunkName: "experience-details" */ "./views/ExperienceDetails.vue"
            )
        }
      ],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        );

        if (exists) {
          next();
        } else {
          next({ name: "NotFound" });
        }
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "not-found" */ "./views/NotFound.vue")
    }
  ]
});

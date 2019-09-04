import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
      path: "/brazil",
      name: "Brazil",
      component: () =>
        import(/* webpackChunkName: "brazil" */ "./views/Brazil.vue")
    },
    {
      path: "/hawaii",
      name: "Hawaii",
      component: () =>
        import(/* webpackChunkName: "hawaii" */ "./views/Hawaii.vue")
    },
    {
      path: "/jamaica",
      name: "Jamaica",
      component: () =>
        import(/* webpackChunkName: "jamaica" */ "./views/Jamaica.vue")
    },
    {
      path: "/panama",
      name: "Panama",
      component: () =>
        import(/* webpackChunkName: "panama" */ "./views/Panama.vue")
    },
    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "destination-details" */ "./views/DestinationDetails.vue"
        )
    }
  ]
});

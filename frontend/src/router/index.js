import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DataImport from "../views/DataImport.vue"
import ApplicationSettings from "../views/ApplicationSettings.vue"
import MessagesTest from "../views/MessagesTest.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/data-import",
    name: "Data Import",
    component: DataImport,
  },  {
    path: "/messages",
    name: "Messages",
    component: MessagesTest,
  },
  {
    path: "/application-settings",
    name: "Application Settings",
    component: ApplicationSettings,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

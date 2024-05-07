import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },

  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => import("@/views/Intro.vue"),
  },
  {
    path: "/arts",
    name: "Arts",
    component: () => import("@/views/Arts.vue"),
  },
  {
    path: "/playtogether",
    name: "PlayTogether",
    component: () => import("@/views/PlayTogether.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("@/views/Cards.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/views/Demo.vue"),
  },
];

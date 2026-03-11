import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("@/views/DocsView.vue"),
    },
    {
      path: "/changelog",
      name: "changelog",
      component: () => import("@/views/ChangelogView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/PrivacyView.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/TermsView.vue"),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 80 };
    return { top: 0 };
  },
});

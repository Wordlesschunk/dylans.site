import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/BodyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    }
  ]
})

export default router
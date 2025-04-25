import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue'),
    },
    {
      path: '/partners',
      name: 'partner',
      component: () => import('../views/PartnerView.vue'),
    },
    {
      path: '/about-us',
      name: 'aboutus',
      component: () => import('../views/AboutUs.vue'),
    },
  ],
})

export default router

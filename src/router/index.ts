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
    {
      path: '/products/whitelabel',
      name: 'whiteLabel',
      component: () => import('../views/products/WhiteLabel.vue'),
    },
    {
      path: '/products/live-casino',
      name: 'liveCasino',
      component: () => import('../views/products/liveCasino/CasinoView.vue'),
    },
    {
      path: '/products/telebet',
      name: 'telebet',
      component: () => import('../views/products/TelebetView.vue'),
    },
  ],
})

export default router

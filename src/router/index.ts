import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/about-us',
    //   name: 'about-us',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: () => import('../views/ServicesView.vue')
    // },
    // {
    //   path: '/industries',
    //   name: 'industries',
    //   component: () => import('../views/IndustriesView.vue')
    // },
    // {
    //   path: '/insight',
    //   name: 'insight',
    //   component: () => import('../views/InsightView.vue')
    // },
    // {
    //   path: '/careers',
    //   name: 'careers',
    //   component: () => import('../views/CareersView.vue')
    // },
    // {
    //   path: '/contact-us',
    //   name: 'contact-us',
    //   component: () => import('../views/ContactView.vue')
    // }
  ],
})

export default router

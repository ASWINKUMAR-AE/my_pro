import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/webhome',
      name: 'webhome',
      component: () => import('../views/webHome.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/gifts',
      name: 'gifts',
      component: () => import('../views/Gifts.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    }
    
  ]
})

export default router

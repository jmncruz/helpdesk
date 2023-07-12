import { createRouter, createWebHistory } from 'vue-router'
import Teste from '../views/Teste.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Teste
    },

  ]
})

export default router

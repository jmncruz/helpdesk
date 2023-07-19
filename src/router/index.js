import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layouts/index.vue'),
      redirect: '/dashboards/dashboard-home',
      children: [
        {
            path: '/dashboards',
            name: 'Dashboards',
            component: () => import('@/views/dashboards/index.vue'),
            meta: {
                title: 'Dashboard',
            },
            children: [
                {
                    path: 'dashboard-home',
                    name: 'dashboard-home',
                    component: () =>
                        import('@/views/dashboards/Home.vue'),
                },
            ],
        },
      ]
    },
  ]
})

export default router

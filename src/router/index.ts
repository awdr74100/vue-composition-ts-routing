import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      component: () => import('@/views/UserView.vue'),
      children: [
        {
          path: '',
          name: 'user',
          component: () => import('@/views/UserProfileView.vue'),
        },

        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/UserProfileView.vue'),
        },
      ],
    },
  ],
});

export default router;

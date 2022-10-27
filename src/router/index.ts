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
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      // props: true,
      // props: { title: 'Bang Bang Bang' },
      props: (route) => ({ id: route.params.id + 'z', title: 'Bang Bone' }),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(to, from);
  return true;
});

export default router;

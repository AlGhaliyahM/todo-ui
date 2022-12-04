import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/RegisterView.vue'),
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('../views/LoginView.vue'),
      },
    },
    {
      path: '/',
      name: 'Todo',
      components: {
        default: () => import('../views/TodoView.vue'),
        NavBar: () => import('@/components/Navbar.vue'),
      },
    },
  ],
});

export default router;

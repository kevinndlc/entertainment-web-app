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
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MoviesView.vue'),
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('@/views/SeriesView.vue'),
    },
    {
      path: '/bookmarks',
      name: 'bookmars',
      component: () => import('@/views/BookmarksView.vue'),
    },
    {
      path: '/:notfound(.*)*',
      redirect: '/'
    },
  ],
});

export default router

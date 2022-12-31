import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: "/"
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PageNotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = "Artus | " + to.name;
  next();
});

export default router

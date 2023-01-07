import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import AboutMeView from '../views/AboutMeView.vue'

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
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/about-me',
      name: 'About me',
      component: AboutMeView
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PageNotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = "Arthur · " + to.name;
  next();
});

export default router

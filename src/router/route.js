 import { createRouter, createWebHistory } from "vue-router";
 import Home from '../pages/Home.vue'
 import Resume from '../pages/Resume.vue'

 const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
 ]

 const router = createRouter({
  history: createWebHistory(),
  routes
 })

 export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Film/Films.vue'
import Details from '../views/Film/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'Films',
    component: Films,
    props: true
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

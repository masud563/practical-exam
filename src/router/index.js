import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FirstAssignment from '../views/FirstAssignment.vue'
import SecondAssignment from '../views/SecondAssignment.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstAssignment',
    name: 'FirstAssignment',
    component: FirstAssignment
  },
  {
    path: '/secondAssignment',
    name: 'SecondAssignment',
    component: SecondAssignment
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

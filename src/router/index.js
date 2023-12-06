import sample from './sample'
import todo from './todo'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [...sample, ...todo]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

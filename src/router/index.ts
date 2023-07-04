import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  // 动态的基础路由
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router

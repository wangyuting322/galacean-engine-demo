import type { RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/home/Home.vue') }
]
export default routes

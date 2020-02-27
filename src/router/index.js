import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact Us',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactUs')
  },
  {
    path: '/business-services',
    name: 'Business Services',
    // route level code-splitting
    // this generates a separate chunk (business-services.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "business-service" */ '../views/BusinessServices')
  },
  {
    path: '/quote',
    name: 'Quote',
    // route level code-splitting
    // this generates a separate chunk (quote.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quote" */ '../views/Quote')
  },
  {
    path: '/business-service/*',
    name: 'Business',
    // route level code-splitting
    // this generates a separate chunk (business-service/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service-detail" */ '../views/BusinessServiceDetail')
  },
  {
    path: '/special-deals',
    name: 'Business',
    // route level code-splitting
    // this generates a separate chunk (business-service/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "business-service" */ '../views/BusinessServiceDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

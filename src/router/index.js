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
    path: '/business-service/:slug/get-quote',
    name: 'Quote',
    // route level code-splitting
    // this generates a separate chunk (quote.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quote" */ '../views/Quote')
  },
  {
    path: '/business-service/:slug',
    name: 'Business',
    // route level code-splitting
    // this generates a separate chunk (service-detail/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service-detail" */ '../views/BusinessServiceDetail')
  },
  {
    path: '/special-deals',
    name: 'Special',
    // route level code-splitting
    // this generates a separate chunk (special-deals/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "special-deals" */ '../views/SpecialDeals')
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms',
    // route level code-splitting
    // this generates a separate chunk (terms/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms')
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    // route level code-splitting
    // this generates a separate chunk (privacy/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy')
  },
  {
    path: '/print-services/get-quote/:product',
    name: 'GetQuote',
    // route level code-splitting
    // this generates a separate chunk (quote/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quote" */ '../views/GetQuote')
  },
  {
    path: '/banners/get-quote/:product',
    name: 'QuoteSignage',
    // route level code-splitting
    // this generates a separate chunk (quoteSignage/*.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quoteSignage" */ '../views/GetQuoteSignage')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

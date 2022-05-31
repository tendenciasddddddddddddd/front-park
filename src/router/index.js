import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import ComponentsAll from "../views/ComponentsAll.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      header: AppHeader,
      default: ComponentsAll,
      footer: AppFooter
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/paseo',
    name: 'paseo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

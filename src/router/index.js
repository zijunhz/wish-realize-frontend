import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addWishView from '../views/addWishView.vue'
import confirmWishView from '../views/confirmWishView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/addWishView',
    name: 'addWishView',
    component: addWishView
  }, {
    path: '/confirmWishView/:wishID',
    name: 'confirmWishView',
    component: confirmWishView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

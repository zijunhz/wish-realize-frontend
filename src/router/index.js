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
    component: HomeView,
    meta: {
      title: `NIMOers的春节愿望`
    }
  }, {
    path: '/addWishView',
    name: 'addWishView',
    component: addWishView,
    meta: {
      title: `NIMOers的春节愿望：新增愿望`
    }
  }, {
    path: '/confirmWishView/:wishID',
    name: 'confirmWishView',
    component: confirmWishView,
    meta: {
      title: `NIMOers的春节愿望：实现愿望`
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router

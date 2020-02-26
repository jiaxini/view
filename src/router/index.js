import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Index')
    },
    {
      path: '/shop',
      component: () => import('@/components/Search')
    },
    {
      path: '/product',
      component: () => import('@/components/Product')
    },
    {
      path: '/cart',
      component: () => import('@/components/Cart')
    },
    {
      path: '/confirm',
      component: () => import('@/components/Confirm')
    },
    {
      path: '/pay',
      component: () => import('@/components/Pay')
    },
    {
      path: '/order',
      component: () => import('@/components/Order')
    },
    {
      path: '/detail',
      component: () => import('@/components/OrderDetail')
    },
    {
      path: '/address',
      component: () => import('@/components/Address')
    },
    {
      path: '/user',
      component: () => import('@/components/User')
    },
    {
      path: '/login',
      component: () => import('@/components/Login')
    },
    {
      path: '/register',
      component: () => import('@/components/Login')
    }
  ]
})

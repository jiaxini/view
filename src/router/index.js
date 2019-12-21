import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index';
import Search from '@/components/Search';
import Product from '@/components/Product';
import Cart from '@/components/Cart';
import Confirm from '@/components/Confirm';
import Pay from '@/components/Pay';
import Order from '@/components/Order';
import OrderDetail from '@/components/OrderDetail';
import Address from '@/components/Address';
import User from '@/components/User';
import Login from '@/components/Login';
import Register from '@/components/Register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Search
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/detail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

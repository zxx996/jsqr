import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import my from '../views/my/my.vue'
import detail from '../views/detail/detail.vue'
import address from '../views/address/address.vue'
import eaditaddress from '../views/address/eaditaddress.vue'
Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/home'},
    {path: '/home',name: 'home',component: home},
    {path: '/category',name: 'category',component: category},
    {path: '/cart',name: 'cart',component: cart},
    {path: '/my',name: 'my',component: my},
    {path: '/detail',name: 'detail',component: detail},
    {path: '/address',name: 'address',component: address},
    {path: '/eaditaddress',name: 'eaditaddress',component: eaditaddress}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

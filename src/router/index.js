import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import home from '@/views/Home.vue'
//import home from './components/home/home.vue'
import Landlordregister from '@/views/landlordregister.vue'
import Passengerregster from '@/views/passengerregster.vue'
import Login from '@/views/login.vue'
import community from '@/views/community.vue'
import landlord from '@/views/landlord.vue'
import tenant from '@/views/tenant.vue'
import resetpassword from '@/views/resetpassword.vue'
import lordregisterknow from '@/views/lordregisterknow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/lordregisterknow',
      name: 'lordregisterknow',
      component: lordregisterknow
    },
      {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetpassword
    },
    {
      path: '/landlord',
      name: 'landlord',
      component: landlord
    },
    {
      path: '/tenant',
      name: 'tenant',
      component: tenant
    },
    {
      path: '/landlordregister',
      name: 'landlordregister',
      component: Landlordregister
    },
    {
      path: '/passengerregster',
      name: 'passengerregster',
      component: Passengerregster
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    
  ]
})

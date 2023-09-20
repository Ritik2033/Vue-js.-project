import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import merphy from '../views/merphy.vue'
import t_h_table from '../views/t_h_table.vue';
import card from '../views/card.vue';
import nav_bar from '../views/nav_bar.vue'
import web from '../views/web.vue'
import transaction from '../views/transaction.vue'
import deznav from '../views/deznav.vue'
import test from '../views/test.vue'
import transaction_details from '../views/transaction_details.vue'
import test2 from '../views/test2.vue'
import card_list from '../views/card_list.vue'
import card_statical from '../views/card_statical.vue'
import card_center from '../views/card_center.vue'
import login from '../views/login.vue'
import Register from '../views/Register.vue'
import { isAuthenticated } from '../views/navigation-guard';
import invoices from '../views/invoices.vue'
import invoices_main from '../views/invoices_main.vue'
import payment_his from '../views/payment_his.vue'
import wallet from '../views/wallet.vue'
import transfer from '../views/transfer.vue'
import pay from '../views/pay.vue'
import my_wallet from '../views/my_wallet.vue'
import overview from '../views/overview.vue'
//import pt from '../views/pt.vue'
import spending from '../views/spending.vue'
import quick from '../views/quick.vue'
import quick_transfer from '../views/quick_transfer.vue'
import dashboard from '../views/dashboard.vue'
import test3 from '../views/test3.vue'
import test4 from '../views/test4.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/sidebar',
    name: 'home',
    component: HomeView
  },
  {
    path: '/deznav',
    name: 'deznav',
    component: deznav
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  

  {
    path: '/transaction_details',
    name: 'transaction_details',
    component: transaction_details
  },

  {
    path: '/merphy',
    name: 'merphy',
    component: merphy
  },
  {
    path: '/card',
    name: 'card',
    component: card,
  },

  {
    path: '/t_h_table',
    name: 't_h_table',
    component:t_h_table
  },

  {
    path: '/test',
    name: 'test',
    component:test
  },

  {
    path: '/web',
    name: 'web',
    component:web
  },

  {
    path: '',
    name: 'login',
    component:login
  },

  {
    path: '/transaction',
    name: 'transaction',
    component:transaction
  },

  {
    path: '/navbar',
    name: 'nav_bar',
    component:nav_bar
  },

  {
    path: '/cardlist',
    name: 'card_list',
    component:card_list
  },

  {
    path: '/cardcenter',
    name: 'card_center',
    component:card_center
  },


  {
    path: '/cardstatical',
    name: 'card_statical',
    component:card_statical
  },

  {
    path: '/invoices',
    name: 'invoices',
    component: invoices
  },

  {
    path: '/invoices_main',
    name: 'invoices_main',
    component: invoices_main
  },

  {
    path: '/payment_his',
    name: 'payment_his',
    component:payment_his
  },

  {
    path: '/wallet',
    name: 'wallet',
    component:wallet
  },

  {
    path: '/transfer',
    name: 'transfer',
    component:transfer
  },

  {
    path: '/pay',
    name: 'pay',
    component:pay
  },

  
  {
    path: '/my_wallet',
    name: 'my_wallet',
    component:my_wallet
  },

  {
    path: '/test2',
    name: 'test2',
    component:test2
  },

  {
    path: '/overview',
    name: 'overview',
    component:overview
  },

  {
    path: '/spending',
    name: 'spending',
    component:spending
  },
  {
    path: '/quick',
    name: 'quick',
    component:quick
  },

  {
    path: '/quick_transfer',
    name: 'quick_transfer',
    component:quick_transfer
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component:dashboard
  },

  {
    path: '/test3',
    name: 'test3',
    component:test3
  },

  {
    path: '/test4',
    name: 'test4',
    component: test4
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated()  && to.name !== 'Register') {
    // User is not authenticated and the route is not the login page
    next({ name: 'login' }); // Redirect to the login page
  } else {
    // User is authenticated or the route is the login page
    next(); // Proceed to the requested route
  }
});


export default router

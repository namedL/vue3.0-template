import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'root',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    //props: true,
    component: () => import('./views/Home.vue')
  }
  ]
})

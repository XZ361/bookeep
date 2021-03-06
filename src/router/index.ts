import EditLabel from '@/views/EditLabel.vue'
import Labels from '@/views/Labels.vue'
import Money from '@/views/Money.vue'
import NotFound from '@/views/NotFound.vue'
import Statistics from '@/views/Statistics.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path:'/labels',
    name:'Labels',
    component:Labels
  },
  {
    path:'/statistics',
    name:'Statistics',
    component:Statistics
  },
  {
    path:'/labels/edit/:id',
    component:EditLabel
  },
  {
    path:'*',
    component:NotFound
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

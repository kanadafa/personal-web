import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PhaserDemo from '../views/PhaserDemo.vue'
import WebDemo from '../views/WebDemo.vue'
import UnityDemo from '../views/UnityDemo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/phaser',
    name: 'phaserDemo',
    component: PhaserDemo
  },
  {
    path: '/web',
    name: 'webDemo',
    component: WebDemo
  },
  {
    path: '/unity',
    name: 'unityDemo',
    component: UnityDemo
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

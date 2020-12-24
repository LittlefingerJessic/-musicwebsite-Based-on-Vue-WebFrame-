import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Findmusic from '../components/Findmusic.vue'
import Ceshi from '../components/ceshi.vue'
import My from '../components/Myplaylist.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/findmusic'
  },
  {
    path: '/findmusic',
    component: Login,
    children: [
      { path: '/findmusic', component: Findmusic },
      { path: '/ceshi', component: Ceshi },
      { path: '/myplaylist', component: My }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router

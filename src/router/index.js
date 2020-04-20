import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/client/Home.vue'
import Blog from '../views/client/Blog.vue'
import Catalog from '../views/client/Catalog.vue'
import Reservation from '../views/client/Reservation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  
]

const router = new VueRouter({
  routes
})

export default router

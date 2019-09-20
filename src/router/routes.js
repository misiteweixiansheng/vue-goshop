import Msite from "../pages/msite/msite.vue"
import Order from "../pages/order/order.vue"
import Search from "../pages/search/search.vue"
import Profile from "../pages/profile/profile.vue"
import Login from "../pages/login/login.vue"
export default [
  {
    path: '/msite',
    component:Msite,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/order',
    component: Order,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/search',
    component: Search,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/profile',
    component: Profile,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    redirect:"/Msite"
  }
]
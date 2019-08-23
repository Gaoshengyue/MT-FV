import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Foot from "@/components/Foot"
import Comment from "@/components/Comment"
import Ration from "@/components/Ration"
import Friend from "@/components/Friend"
import Equipment from "@/components/Equipment"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/foot',
      name: 'Foot',
      component: Foot
    },
     {

      path: '/',
      name: 'Comment',
      component: Comment
    },
      {
      path: '/ration',
      name: 'Ration',
      component: Ration
    },
      {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
     {
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    }
  ]
})

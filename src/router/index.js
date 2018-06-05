import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'
import Micro from '@/components/Micro'
import MicroDetail from '@/components/MicroDetail'
import Forum from '@/components/Forum'
import Content from '@/components/Content'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path: '/index',
      name: 'indexNew',
      component: Index
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/course',
      name: 'course',
      component: Course
    },

    {
      path:'/detail/:id',
      name:'coursedetail',
      component:CourseDetail,
    } ,

    {
      path: '/micro',
      name: 'micro_course',
      component:Micro,
    },

    {
      path: '/other/:id',
      name: 'micro_course_detail',
      component:MicroDetail,
    },

    {
      path: '/forum',
      name: 'forums',
      component: Forum
    },

    {
      path: '/forum/:id',
      name: 'contents',
      component: Content
    },
  ],
  mode:'history'
})

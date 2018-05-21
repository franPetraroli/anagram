import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },

  ]
})

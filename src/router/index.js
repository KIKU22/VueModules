import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Calculator from '@/components/Modal/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/HelloWorld/:a',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Modal/Calculator',
      name: 'Calculator',
      component: Calculator
    }
  ]
})

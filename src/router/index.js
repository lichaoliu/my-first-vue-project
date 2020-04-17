import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Test from "../pages/home/Test";
import Filter1 from "../pages/home/Filter1";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/filter',
      name: 'Filter1',
      component: Filter1
    }
  ]
})

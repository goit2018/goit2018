import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import MainPage from '@/components/MainPage'
import PreviewCardBottom from '@/components/PreviewCard/PreviewCardBottom'


=======
import details from '@/components/details'
import home from '@/components/home'
import search from '@/components/search'
>>>>>>> parent of 901e258... added fixes in film card

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/PreviewCard',
      name: 'PreviewCardBottom',
      component: PreviewCardBottom
=======
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/search',
      name: 'search',
      component: search
>>>>>>> parent of 901e258... added fixes in film card
    }
  ]
})

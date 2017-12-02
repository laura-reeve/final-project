import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import MovieSearch from '@/components/MovieSearch'
import WeatherSearch from '@/components/WeatherSearch'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeatherSearch',
      component: WeatherSearch
    },
    {
      path: '/movies',
      name: 'MovieSearch',
      component: MovieSearch
    }
  ]
})

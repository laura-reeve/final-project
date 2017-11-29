import Vue from 'vue'
import Router from 'vue-router'
import MovieSearch from '@/components/MovieSearch'
import WeatherSearch from '@/components/WeatherSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieSearch',
      component: MovieSearch
    },
    {
      path: '/weather',
      name: 'WeatherSearch',
      component: WeatherSearch
    }
  ]
})

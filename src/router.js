import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const pageRoute = './views/'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`${pageRoute}ComicHome`)
    },
    {
      path: '/chapter/:cid/page/:pid',
      name: 'page',
      component: () => import(`${pageRoute}ComicPage`)
    }
  ]
})

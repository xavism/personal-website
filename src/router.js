import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import dashboard from './containers/dashboard'
import posts from './containers/posts'

// application routes
const routes = [
  { path: '/', component: home },
  { path: '/dashboard', component: dashboard },
  { path: '/posts', component: posts }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

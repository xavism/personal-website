// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import hero from './components/hero/hero'
import home from './containers/home'
import technological from './containers/technological'
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
import VueApollo from 'vue-apollo'
import router from './router'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id
})

Vue.use(VueApollo, {
  apolloClient
})
/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <home />
        <technological />
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    hero,
    home,
    technological
  }
}).$mount('#app')
/*
new Vue({
  template: `
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    hero
  }
}).$mount('#app')
*/

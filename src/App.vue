<template>
  <div class="app">
    <navbar :tabsy="tabs" />
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import router from './router'
import navbar from './components/navbar'

const tabsDefs = router.options.routes
console.log(tabsDefs)
export default {
  name: 'app',
  components: {
    navbar,
    router
  },
  data: function () { return { tabs: tabsDefs } }
}
</script>

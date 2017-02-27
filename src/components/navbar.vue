<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </router-link>
      <router-link v-for="tab in tabs" class="nav-item is-tab" v-bind:to="tab.path">
        <span class="icon">
            <i v-bind:class="tab.icon"></i>
        </span>
        <span> {{ tab.title }} </span>
      </router-link>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item" target="_blank" v-bind:href="github.protocol + '://' + github.domain + '/' + github.username + '/' + github.repository">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <span class="nav-item">
        <a class="button is-primary" v-bind:href="github.protocol + '://' + github.domain + '/' + github.username + '/' + github.repository + github.download">
          <span class="icon">
            <i class="fa fa-download"></i>
          </span>
          <span>Download</span>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['tabsy'],
  data () {
    return {
      github: {
        protocol: 'https',
        domain: 'github.com',
        username: 'xavism',
        repository: 'vuesetup',
        download: '/archive/master.zip'
      },
      tabs: [
        {
          title: 'Dasboard',
          path: '/dashboard',
          icon: 'fa fa-rebel'
        },
        {
          title: 'Posts',
          path: '/posts',
          icon: 'fa fa-list-alt'
        }
      ]
    }
  }
}
</script>

<style lang="css">

</style>

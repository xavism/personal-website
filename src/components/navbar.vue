<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </router-link>
       <router-link class="nav-item is-tab" to="/dashboard">
        <span class="icon">
            <i class="fa fa-rebel"></i>
        </span>
        <span>Dasboard</span>
      </router-link>
      <router-link class="nav-item is-tab" to="/projects">
        <span class="icon">
            <i class="fa fa-list-alt"></i>
        </span>
        <span>Projects List</span>
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
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <span class="nav-item">
        <a class="button is-primary">
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
  data () {
    return {
      github: {
        link: 'https://github.com',
        username: 'xavism'
      }
    }
  }
}
</script>

<style lang="css">

</style>

<template lang="html">
  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div id="profile-div" class="container has-text-centered hidden">
      <figure class="image is-256x256 is-centered">
        <img src="/static/Profile2-shadow.png">
      </figure>
      <h1 class="title">
        Hi! My name is <strong class="is-pink">Xavi Sánchez</strong>, nice to meet you!
      </h1>
      <h2 class="subtitle">
        <code>I'm a <strong class="is-primary">Fullstack</strong> developer currently living in Madrid.</code>
      </h2>
      <social :socialMedia="socialMedia"/>
    </div>
  </div>
</template>

<script>
  import social from './../social-media-nav'
  import { socialMedia } from './../../data/data'
  import $ from 'jquery'

  export default {
    name: 'hero-body',
    components: {
      social
    },
    data () {
      return {
        socialMedia
      }
    }
  }

  $(document).ready(function () {
    $('#profile-div').toggleClass('hidden')
  })
  
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;
  .hero-body {
    #profile-div {
      //top: 0px;
      -webkit-transition: all 1.5s, height 1.5s, -webkit-transform 1.5s;
      transition: all 1.5s, height 1.5s, transform 1.5s;
    }
    .hidden {
      opacity: 0;
      margin-top: -200px;
    }
    .title {
      strong.is-pink {
        color: $pink;
      }
    }
    .subtitle {
      strong.is-primary {
        color: $primary;
      }
      code {
        background: none;
        color: white;
      }
    }
  }

  .image.is-256x256 {
    width: 256px;
    height: 256px;
  }

  .image.is-centered {
    margin: 0 auto;
  }

</style>

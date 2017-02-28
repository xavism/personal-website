<template lang="html">
  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <figure class="image is-256x256 is-centered">
        <img src="/static/Profile-shadow.png">
      </figure>
      <h1 class="title">
        Hi! My name is <strong class="is-pink">Xavi Sánchez</strong>, nice to meet you!
      </h1>
      <h2 class="subtitle">
        <code>I'm a <strong class="is-primary">Fullstack</strong> developer currently living in Barcelona.</code>
      </h2>
      <social :socialMedia="socialMedia"/>
    </div>
  </div>
</template>

<script>
  import social from './../social-media-nav'
  import { socialMedia } from './../../data/data'

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
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;
  .hero-body {
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

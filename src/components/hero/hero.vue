<template lang="html">
  <section class="hero is-primary is-fullheight with-bg-image">
    <herobody />
    <herofoot :tabs="tabs"/>
  </section>
</template>

<script>
import herobody from './hero-body'
import herofoot from './hero-foot'
import { tabs } from './../../data/data'
export default {
  name: 'hero',
  components: {
    herobody,
    herofoot
  },
  data () {
    return {
      tabs
    }
  }
}

</script>

<style lang="scss">

.hero.is-fullheight.with-bg-image {
  background-image: linear-gradient(rgba(0, 209, 179, 0.4),rgba(140, 0, 210, 0.4)),linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(/static/Background.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>

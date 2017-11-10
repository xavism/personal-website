<template lang="html">
      <div class="hero-foot">
        <nav class="tabs is-boxed is-centered">
            <ul>
            <li v-for="tab in tabs">
              <router-link v-bind:to="tab.path">
              
                <span class="icon is-small">
                    <i v-bind:class="tab.icon"></i>
                </span>
                <span> {{ tab.title }} </span>
                
              </router-link>
              </li>
            </ul>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'hero-foot',
  props: ['tabs']
}
</script>

<style lang="scss">

</style>

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

<!--               <li class="is-active">
                <a>
                  <span class="icon is-small"><i class="fa fa-vcard"></i></span>
                  <span>Description</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="fa fa-comments"></i></span>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="fa fa-briefcase"></i></span>
                  <span>Work Experience</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="fa fa-code-fork"></i></span>
                  <span>Technological Stack</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="fa fa-graduation-cap"></i></span>
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="fa fa-code"></i></span>
                  <span>Skills</span>
                </a>
              </li> -->
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

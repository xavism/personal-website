<template lang="html">
  <div id="dashboard">
  	<h1 class="title is-1"> {{ title }} </h1>
	<columns></columns>
  </div>
</template>

<script>
import columns from './../components/columns'
export default {
  name: 'dashboard',
  components: {
    columns
  },
  data () {
    return {
      title: 'Welcome to Lodash workshop!'
    }
  }
}

</script>

<style lang="css">
</style>

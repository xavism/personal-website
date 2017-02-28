<template lang="html">
  <div id="posts">
    <div class="columns">
      <div class="column is-half">
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>Post's Title</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts">
                <td>{{post.title}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from './../data/data'

console.log(posts)
// Component def
export default {
  name: 'posts',
  components: {
  },
  // Local state
  data: () => ({
    posts: posts
  }),
  // Computed properties
  computed: {
  }
}
</script>

<style lang="css">
</style>
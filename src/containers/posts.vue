<template lang="html">
  <div id="posts">
    <div class="columns">
      <div class="column is-half">
        <div v-if="loading < 0" class="notification">
          Loading
        </div>
        <div v-else class="">
          <table class="table">
            <thead>
              <tr>
                <th>Post's Title</th>
                <th>Author</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts">
                <td>{{post.title}}</td>
                <td>{{post.author.firstName}}</td>
                <td>{{post.author.university.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const authorsQuery = gql`
  query allAuthors {
    authors {
      firstName
      lastName
    }
  }
`
// GraphQL query
const postsQuery = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        firstName
        lastName
        university {
          name
          shortName
        }
      }
    }
  }
`

// Component def
export default {
  name: 'posts',
  components: {
  },
  // Local state
  data: () => ({
    posts: [],
    authors: [],
    loading: 0
  }),
  // Apollo GraphQL
  apollo: {
    // Local state 'posts' data
    authors: {
      query: authorsQuery,
      loadingKey: 'loading'
    },
    posts: {
      query: postsQuery,
      loadingKey: 'loading'
    }
  },
  // Computed properties
  computed: {
    sortedPosts () {
      return this.posts.sort((x, y) => y.votes - x.votes)
    }
  }
}
</script>

<style lang="css">
</style>
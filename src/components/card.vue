<template lang="html">
  <div class="card is-centered">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="'/static/'+cardInfo.coverImage" alt="Cover Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image" style="height: 40px; width: 40px;">
            <img :src="'/static/'+cardInfo.profileImage" alt="Profile picture">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ cardInfo.title }}</p>
          <p class="subtitle is-6">{{ cardInfo.subtitle }}</p>
        </div>
      </div>

      <div class="content">
        {{ cardInfo.description }}
        <br>
        <small>{{ cardInfo.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['cardInfo']
  }
</script>

<style lang="scss">
.card.is-centered {
  margin: 0 auto;
  -webkit-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  -moz-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
}
</style>

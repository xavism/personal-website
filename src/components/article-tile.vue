<template lang="html">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img :src="articleInfo.imgPath" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
        <strong class="is-primary">{{ articleInfo.title }}</strong>
          <br>
          {{ articleInfo.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'article-tile',
    props: ['articleInfo']
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

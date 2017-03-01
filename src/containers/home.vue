<template lang="html">
  <div id="home">
  <div class="section-title has-text-centered">
  	<p class="title is-1">
  		Welcome to my little space!
  		<span class="icon is-large">
  			<i class="fa is-danger fa-heart-o"></i>
		</span>
	</p>
	<p class="subtitle is-3">
		Keep reading to know more about me
		<span class="icon is-medium">
  			<i class="fa is-primary fa-hand-peace-o"></i>
		</span>
	</p>
  </div>
	<div class="columns">
		<div class="column">
			<card :cardInfo="cardInfo"/>
		</div>
		<div class="column">
		</div>
	</div>
  </div>
</template>

<script>
import { cardInfo } from './../data/data'
import card from './../components/card'
export default {
  name: 'home',
  components: { card },
  data () { return { cardInfo } }
}
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;
  .section-title {
  	margin: 30px 0px;
		p.title, p.subtitle{
	  	span.icon {
			.is-danger {
				color: $pink;
			}
			.is-primary {
				color: $primary;
			}
	  	}
	  }
  }

</style>

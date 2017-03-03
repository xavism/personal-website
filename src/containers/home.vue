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
			<window :object="object"/>
		</div>
	</div>
  </div>
</template>

<script>
import { cardInfo } from './../data/data'
import card from './../components/card'
import window from './../components/window'

let object = {
  code: `
    let me = {
      name: Xavi,
      lastName: Sánchez,
      languages: ['Spanish', 'Catalan', 'English', 'German'],
      universities: [{
        longName: 'Facultad dInformàtica de Barcelona',
        shortName: 'FIB',
        country: 'Spain'
        }, {
        longName: 'Karlsruher Institute für Technologie',
        shortName: 'KIT',
        country: 'Germany'
      }]
    }
    `,
  language: 'javascript'
}

export default {
  name: 'home',
  components: { card, window },
  data () { return { cardInfo, object } }
}
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;
  $yellow : #F5AB35;
  $sunset : #F64747;
  $darkGrey : #DADADA;
  $lightGrey : #EEEEEE;

  $heightBar: 30px;
  html::-webkit-scrollbar { 
    display: none; 
  }
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

  .window {
	height: 100%;
  	.bar {
  	width: 100%;
  	background-color: $lightGrey;
  	padding: 5px;
  	height: $heightBar;
  	border-top-left-radius: 5px;
  	border-top-right-radius: 5px;
  	border-top: 1px solid $darkGrey;
  	border-left: 1px solid $darkGrey;
  	border-right: 1px solid $darkGrey;
	
	.dot {
		display: inline-block;
		margin: 2px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.dot.close {
		background-color: $sunset;
	}
	.dot.expand {
		background-color: $primary;
	}
	.dot.minimize {
		background-color: $yellow;
	}
  }

  	pre {
		border-bottom-left-radius: 5px;
  		border-bottom-right-radius: 5px;
  		height: calc(100% - 30px;
	}
 }

</style>

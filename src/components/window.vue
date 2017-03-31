<template lang="html">
    <div class="window" id="#description-code">
      <div class="bar">
        <div class="dot close"></div>
        <div @click="minimize('#description-code')" class="dot minimize"></div>
        <div class="dot expand"></div>
      </div>
      <pre class="hljs">
        <code v-html="computedCode" class="hljs"> 
        </code>
      </pre>
    </div>
</template>

<script>
import hljs from 'highlight.js'
import $ from 'jquery'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-bulma.css'

console.log(hljs)
hljs.initHighlighting()

export default {
  name: 'window',
  props: ['object'],
  methods: {
    minimize: function (window) {
      $(document).ready(function () {
        console.log($(window))
        $(window).toggleClass('minimized')
        // $window.toggleClass('minimized')
      })
    }
  },
  computed: {
    computedCode: function () {
      return hljs.highlight(this.object.language, this.object.code).value
    }
  }
}
</script>


<style lang="scss">
  $primary: #00d1b2;
  $yellow : #F5AB35;
  $sunset : #F64747;
  $darkGrey : #DADADA;
  $lightGrey : #EEEEEE;
  $pink: #ff3860;

  $heightBar: 30px;

  .window {
  height: 100%;
  border-radius: 5px;
  -webkit-box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  -moz-box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  -webkit-transition: all 1.5s, height 1.5s, -webkit-transform 1.5s;
  transition: all 1.5s, height 1.5s, transform 1.5s;
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
      background-color: $pink;
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

 .window.minimized {
    height: $heightBar;
 }

</style>

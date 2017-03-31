<template lang="html">
  <div id="technological">
    <headersection :headdata="techheader"/>
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical is-7">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['vue'].class">
                  <tileArticle :articleInfo="technologicalStack['vue']"></tileArticle>
                </article>
                <article class="tile is-child notification with-shadow" :id="technologicalStack['angular'].class">
                  <tileArticle :articleInfo="technologicalStack['angular']"></tileArticle>
                </article>
              </div>
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['node'].class">
                  <tileArticle :articleInfo="technologicalStack['node']"></tileArticle>
                </article>
                <article class="tile is-child notification with-shadow" :id="technologicalStack['npm'].class">
                  <tileArticle :articleInfo="technologicalStack['npm']"></tileArticle>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification with-shadow" :id="technologicalStack['git'].class">
                <tileArticle :articleInfo="technologicalStack['git']"></tileArticle>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification with-shadow" :id="technologicalStack['js'].class">
              <tileArticle :articleInfo="technologicalStack['js']"></tileArticle>
            </article>
          </div>
        </div>
        <div class="tile">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-parent is-vertical is-3">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['jquery'].class">
                  <tileArticle :articleInfo="technologicalStack['jquery']"></tileArticle>
                </article>
                <article class="tile is-child notification with-shadow" :id="technologicalStack['bootstrap'].class">
                  <tileArticle :articleInfo="technologicalStack['bootstrap']"></tileArticle>
                </article>
              </div>
              <div class="tile is-vertical is-6">
                <div class="tile">
                  <div class="tile is-parent is-6">
                    <article class="tile is-child notification with-shadow" :id="technologicalStack['bulma'].class">
                      <tileArticle :articleInfo="technologicalStack['bulma']"></tileArticle>
                    </article>
                  </div>
                  <div class="tile is-parent is-6">
                    <article class="tile is-child notification with-shadow" :id="technologicalStack['gulp'].class">
                      <tileArticle :articleInfo="technologicalStack['gulp']"></tileArticle>
                    </article>
                  </div>
                </div>
                <div class="tile">
                  <div class="tile is-parent">
                    <article class="tile is-child notification with-shadow" :id="technologicalStack['ubuntu'].class">
                      <tileArticle :articleInfo="technologicalStack['ubuntu']"></tileArticle>
                    </article>
                  </div>
                </div>
              </div>
              <div class="tile is-parent is-vertical is-3">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['html'].class">
                  <tileArticle :articleInfo="technologicalStack['html']"></tileArticle>
                </article>
                <article class="tile is-child notification with-shadow" :id="technologicalStack['css'].class">
                  <tileArticle :articleInfo="technologicalStack['css']"></tileArticle>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification with-shadow" :id="technologicalStack['sass'].class">
                <tileArticle :articleInfo="technologicalStack['sass']"></tileArticle>
              </article>
            </div>
            <div class="tile">
              <div class="tile is-7 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['webpack'].class">
                <tileArticle :articleInfo="technologicalStack['webpack']"></tileArticle>
              </article>
              </div>
              <div class="tile is-5 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['graphql'].class">
                <tileArticle :articleInfo="technologicalStack['graphql']"></tileArticle>
              </article>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-5 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['laravel'].class">
                <tileArticle :articleInfo="technologicalStack['laravel']"></tileArticle>
              </article>
              </div>
              <div class="tile is-3 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['php'].class">
                <tileArticle :articleInfo="technologicalStack['php']"></tileArticle>
              </article>
              </div>
              <div class="tile is-4 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['mysql'].class">
                <tileArticle :articleInfo="technologicalStack['mysql']"></tileArticle>
              </article>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-6 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['csharp'].class">
                <tileArticle :articleInfo="technologicalStack['csharp']"></tileArticle>
              </article>
              </div>
              <div class="tile is-6 is-parent">
                <article class="tile is-child notification with-shadow" :id="technologicalStack['net'].class">
                <tileArticle :articleInfo="technologicalStack['net']"></tileArticle>
              </article>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import { techheader, technologicalStack } from './../data/data'
  import headersection from './../components/header'
  import tileArticle from './../components/article-tile'

  const articleVar = {title: 'Hi', description: 'description', imgPath: '/static/technological/vue.png'}

  export default {
    name: 'technological',
    components: { headersection, tileArticle },
    data () { return { techheader, technologicalStack } }
  }
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;

  $vueColor: #41b883;
  $angularColor: #dd0330;
  $nodeColor: #689f64;
  $npmColor: #cb3837;
  $gitColor: #f05033;
  $jsColor: #f6df48;
  $jqueryColor: #0868ab;
  $gulpColor: #eb4a4b;
  $htmlColor: #f16529;
  $bootstrapColor: #563d7c;
  $ubuntuColor: #dd4814;
  $cssColor: #2162af;
  $sassColor: #cd679a;
  $webpackColor: #6a91d9;
  $graphqlColor: #e535ab;
  $laravelColor: #f1524b;
  $phpColor: #777bb3;
  $mysqlColor: #5e87a1;
  $netColor: #16649b;
  $csharpColor: #680e7f;
  
  #vue {
    border: 4px solid $vueColor;
    strong {
      color: $vueColor;
    }
  }
  #angular {
    border: 4px solid $angularColor;
    strong {
      color: $angularColor;
    }
  }
  #node {
    border: 4px solid $nodeColor;
    strong {
      color: $nodeColor;
    }
  }
  #npm {
    border: 4px solid $npmColor;
    strong {
      color: $npmColor;
    }
  }
  #js {
    border: 4px solid $jsColor;
    strong {
      color: $jsColor;
    }
  }
  #git {
    border: 4px solid $gitColor;
    strong {
      color: $gitColor;
    }
  }
  #jquery {
    border: 4px solid $jqueryColor;
    strong {
      color: $jqueryColor;
    }
  }
  #bulma {
    border: 4px solid $primary;
    strong {
      color: $primary;
    }
  }
  #gulp {
    border: 4px solid $gulpColor;
    strong {
      color: $gulpColor;
    }
  }
  #html {
    border: 4px solid $htmlColor;
    strong {
      color: $htmlColor;
    }
  }
  #css {
    border: 4px solid $cssColor;
    strong {
      color: $cssColor;
    }
  }
  #ubuntu {
    border: 4px solid $ubuntuColor;
    strong {
      color: $ubuntuColor;
    }
  }
  #bootstrap {
    border: 4px solid $bootstrapColor;
    strong {
      color: $bootstrapColor;
    }
  }
  #sass {
    border: 4px solid $sassColor;
    strong {
      color: $sassColor;
    }
  }
  #webpack {
    border: 4px solid $webpackColor;
    strong {
      color: $webpackColor;
    }
  }
  #graphql {
    border: 4px solid $graphqlColor;
    strong {
      color: $graphqlColor;
    }
  }
  #laravel {
    border: 4px solid $laravelColor;
    strong {
      color: $laravelColor;
    }
  }
  #php {
    border: 4px solid $phpColor;
    strong {
      color: $phpColor;
    }
  }
  #mysql {
    border: 4px solid $mysqlColor;
    strong {
      color: $mysqlColor;
    }
  }
  #net {
    border: 4px solid $netColor;
    strong {
      color: $netColor;
    }
  }
  #csharp {
    border: 4px solid $csharpColor;
    strong {
      color: $csharpColor;
    }
  }


  .with-shadow {
    -webkit-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
    -moz-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
    box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  }
</style>

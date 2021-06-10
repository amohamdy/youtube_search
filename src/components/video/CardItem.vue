<template>
  <router-link  :to="'/video/'+item.id.videoId" class="card" :class="{'channel':item.id.kind.split('#')[1] == 'channel'}">
    <div class="card__media">
        <img class="card-media-img" :src="item.snippet.thumbnails.high.url"
        alt="YouTube thumbnail">
        <div class="overlay" v-if="item.id.kind.split('#')[1] == 'playlist'">
          <h4>37</h4>
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
            class="style-scope yt-icon"
            style="pointer-events: none; display: block;">
            <g class="style-scope yt-icon" fill="#fff">
            <path d="M0 0h24v24H0z" fill="none" class="style-scope yt-icon"></path>
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7
            9v2H3v2h4v2h2V9H7zm14
            4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
            class="style-scope yt-icon"></path>
            </g></svg>
        </div>
    </div>
    <!-- card details -->
    <div class="card__content">
        <div id="title-meta">
          <h2 class="title">{{item.snippet.title!=null?item.snippet.title:''}}</h2>
          <div class="meta-info">
              <span class="meta channel">
                {{item.snippet.channelTitle !=null?item.snippet.channelTitle:''}}
                </span>
              <!-- <span class="meta views">26k views</span> -->
              <span class="meta published">
                {{item.snippet.publishedAt | moment(" Do MMM  YYYY")}}
              </span>
          </div>
        </div>
        <p class="text">
          {{item.snippet.description !=null?item.snippet.description:''}}
          </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style scoped lang="scss">
  @import '../../scss/mixins.scss';
  @import '../../scss/variables.scss';

      .card {
        width:100%;
        margin:0 auto 1rem;
        @include display-flex(row,space-between,flex-start);
        text-decoration:none;
        color:inherit;
        text-align: left;
        @media screen and (min-width:768px){
          width:70%;
        }
        &.channel{
          border-radius: 50%;
          img{
            border-radius: 50%;
            width: 200px;
            height: 200px;
            margin: auto;
          }
        }

        &__media{
          position: relative;
          display:flex;
          width:52%;
          height:200px;
          @media screen and (min-width:992px){
            height:250px;
          }
          img{
            object-fit: cover;
            width:100%;
          }
          .overlay{
            position: absolute;
            right:0;
            top:0;
            height: 100%;
            width:35%;
            background-color:rgba(0,0,0,0.5);
            color:#fff;
            @include display-flex(column,center,center);
            h4{
              font-size:24px;
              font-weight: bold;
            }
            svg{
              width:50px;
              height: 50px;;
            }

          }
        }

        &__content{
            width:46%;
            height:100%;
            @media screen and (min-width:768px){
              padding-left:2rem;
            }
            .text{
                color:$gray-300;
                line-height:1.5;
                display:-webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

            }
            .meta-info{
              @include display-flex(column,flex-start,flex-start);
                .meta{
                    margin-right:8px;
                    color:$gray-300;


                }
            }

        }
      }

</style>



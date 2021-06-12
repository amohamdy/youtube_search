<template>
  <router-link :to="'/video/'+item.id.videoId" class="card" id="playlist-card">
    <div class="card__media">
        <img  :src="item.snippet.thumbnails.high.url"
        alt="YouTube thumbnail">
        <div class="overlay">
          <h4 class="count" v-if="item.contentDetails">{{item.contentDetails.itemCount}}</h4>
          <h4  v-else>0</h4>
          <img src="../../assets/playlist.svg">
        </div>
    </div>
    <!-- card details -->
    <div class="card__content">
        <h2>{{item.snippet.title!='NULL'?item.snippet.title:''}}</h2>
        <router-link :to="'channel/'+item.snippet.channelId" class="channel-title">
            {{item.snippet.channelTitle !='NULL'?item.snippet.channelTitle:''}}
        </router-link>
        <span>
        {{item.snippet.publishedAt | moment(" Do MMM  YYYY")}}
        </span>
        <p class="desc">
          {{item.snippet.description !='NULL' ?item.snippet.description:''}}
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
  @import '../../scss/card.scss';

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
      img{
        width:30px;
        height: 30px;;
        // transform:rotate(-90deg)
      }

    }



</style>



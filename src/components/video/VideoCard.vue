<template>
  <router-link :to="!playList?'/video/'+item.id.videoId:'/video/'+item.snippet.resourceId.videoId" class="card" id="video-card">
    <div class="card__media">
        <img  :src="item.snippet.thumbnails.high.url"
        alt="YouTube thumbnail">
    </div>
    <!-- card details -->
    <div class="card__content">
          <h2>{{item.snippet.title!='NULL'?item.snippet.title:''}}</h2>
          <div>
            <router-link :to="'/channel/'+item.snippet.channelId" class="channel-title" replace>
                {{item.snippet.channelTitle !='NULL'?item.snippet.channelTitle:''}}
            </router-link>
            <span>
            {{item.snippet.publishedAt | moment(" Do MMM  YYYY")}}
            </span>
          </div>
        <p class="desc">
        {{item.snippet.description !='NULL' ?item.snippet.description:''}}
        </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['item', 'playList'],
};
</script>


<style scoped lang="scss">
  @import '../../scss/card.scss';

</style>





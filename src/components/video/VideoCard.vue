<template>
  <router-link :to="'/video/'+item.id.videoId" class="card">
    <div class="card__media">
        <img  :src="item.snippet.thumbnails.high.url"
        alt="YouTube thumbnail">
    </div>
    <!-- card details -->
    <div class="card__content">
          <h2>{{item.snippet.title!='NULL'?item.snippet.title:''}}</h2>
          <div>
            <router-link :to="'/channel/'+item.snippet.channelId">
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
  props: ['item'],
};
</script>


<style scoped lang="scss">
  @import '../../scss/card.scss';

</style>





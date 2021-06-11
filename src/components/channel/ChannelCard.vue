<template>
    <router-link class="card channel" :to="'/channel/'+item.snippet.channelId">

    <div class="card__media">
        <img :src="item.snippet.thumbnails.high.url"
        alt="YouTube thumbnail">
    </div>
    <!-- card details -->
    <div class="card__content">
        <h2>
            {{item.snippet.channelTitle !='NULL'?item.snippet.channelTitle:''}}
        </h2>
        <span class="meta views">26k views</span>
        <span class="meta published">
        {{item.snippet.publishedAt | moment(" Do MMM  YYYY")}}
        </span>

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
  @import '../../scss/card.scss';

      .card {
        &.channel{
          border-radius: 50%;
          img{
            border-radius: 50%;
            width: 170px;
            height: 170px;
            margin: auto;
          }
        }


      }

</style>



<template>
    <div class="video-details">
        <Loader v-if="pageLoading"></Loader>

        <section class="video-detail-inner" v-if="!pageLoading">
            <div class="video-frame">
                <iframe width="420" height="315"
                :src="'https://www.youtube.com/embed/'+this.id">
                </iframe>
            </div>
            <div class="video-frame-details">
                <div class="top">
                    <div v-if="videoDetails.snippet.title">
                        <h2>{{videoDetails.snippet.title != 'NULL' ? videoDetails.snippet.title : '' }}</h2>
                        <span class="base">{{videoDetails.statistics.viewCount != 'NULL' ? videoDetails.statistics.viewCount:''}} Watching Now</span>
                    </div>
                    <LikeDislike :stat="videoDetails.statistics"/>
                </div>
                <div class="bottom">
                    <img class="avatar" :src="videoDetails.snippet.thumbnails.default.url">
                    <router-link class="channel-info" :to="'channel/'+videoDetails.snippet.channelId" replace>
                        <h2>{{videoDetails.snippet.channelTitle != 'NULL' ? videoDetails.snippet.channelTitle:'undefined'}}</h2>
                        <span class="base">published at {{videoDetails.snippet.publishedAt | moment(" Do MMM  YYYY")}}</span>
                    </router-link>
                </div>
            </div>
        </section>

        <RelatedVideos :apiKey="apiKey" :videoId="id" :smScreen="smScreen" v-if="!pageLoading"/>
    </div>
</template>

<script>
import LikeDislike from '../components/counters/LikeDislike.vue';
import RelatedVideos from '../components/video/RelatedVideos.vue';
import Loader from '../components/layout/Loader.vue';

export default {
  name: 'VideoDetails',
  props:['id', 'smScreen'],
  components: {
    RelatedVideos,
    LikeDislike,
    Loader
  },
  data(){
      return{
          apiKey:this.$store.state.apiKey,
          videoDetails:'',
          pageLoading:false
      }
  },
  methods:{
      getVideoDetails(){
          this.pageLoading=true;
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.id}&key=${this.apiKey}`;
            this.axios.get(url).then(res=>{
            this.videoDetails=res.data.items[0]
            this.pageLoading=false}
            ).catch(err=>console.log(err))
      }
  },
  created(){
      this.getVideoDetails()
  },


};
</script>

<style scoped lang="scss">
  @import '../scss/variables.scss';
  @import '../scss/mixins.scss';

.video-frame{
    iframe{
        width:100%;
        border:0;
    }
}
.video-frame-details{
    height:250px;
    @include display-flex(column,flex-start,flex-start);
    .top,.bottom{
        height:50%;
        width:100%;
        border-bottom:1px solid $gray-150;
        padding:10px;
        @include display-flex(row,flex-start,center);

    }
    .bottom{
        img{
            width:100px;
            height:100px;
            align-self: flex-start;
            object-fit: cover
        }
    }
    .top{
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        @media screen and (min-width:768px){
            flex-direction: row;
            justify-content: flex-start;
        }


    }
    .channel-info{
        text-align: left;
        margin-left:8px;
        text-decoration: none;
        color:inherit
    }
}

</style>

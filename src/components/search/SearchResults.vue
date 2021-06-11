<template>
    <div class="content-wrapper content-wrapper__inner">
          <article v-for="item in searchResultItems" :key="item.index">
              <VideoCard :item="item" v-if="item.id.kind.split('#')[1] == 'video'"></VideoCard>
              <PlaylistCard :item="item" v-else-if="item.id.kind.split('#')[1] == 'playlist'"></PlaylistCard>
              <ChannelCard :item="item" v-else></ChannelCard>
          </article>
        <button v-if="searchResultItems.length<totalResults && !pageLoading &&smScreen" @click="loadMoreResults">
            <span v-if="!loadMore">Show more items</span>
            <Loader v-if="loadMore" :loadMore="loadMore"></Loader>
        </button>
    </div>

</template>


<script>
  import VideoCard from '../video/VideoCard.vue';
  import PlaylistCard from '../playlist/PlaylistCard.vue';
  import ChannelCard from '../channel/ChannelCard.vue';
  import generalMixin from "../../mixins/generalMixin";

  export default {
    components: {
      PlaylistCard,
      VideoCard,
      ChannelCard,
    },
    data() {
      return {
        loadMore:false,
        nextPage:'',
        totalResults:'',
        searchResultItems:'',
        apiKey:this.$store.state.apiKey,
        pageLoading:'',
        windowWidth:window.innerWidth,
        smScreen:'',
      };
    },

    methods: {
      // load more items
      loadMoreResults(){
        this.loadMore=true;
        const url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}&pageToken=${this.nextPage}`;
          this.axios.get(url).then((res) => {
            this.searchResultItems = [...this.searchResultItems,...res.data.items];
            this.loadMore=false;
        }).catch(err=>console.log(err))
      }
    },

    computed:{
      searchText(){
        return this.$store.state.searchText;
      },
      searchResults(){
        return this.$store.state.searchResults
      }
    },
    mixins: [generalMixin],

    watch:{
      searchText:function(){
        console.log('hello')
        this.searchResultItems=this.$store.state.searchResults.items
        this.totalResults=this.$store.state.searchResults.pageInfo.totalResults;
        this.nextPage =this.$store.state.searchResults.nextPageToken;
        this.pageLoading=this.$store.state.pageLoading;
      },

      windowWidth:{
      handler:'checkWindowSize',
      immediate:true
    }
    },



  };
</script>

<style  lang="scss" scoped>
    button{
      position: absolute;
      bottom:0;
      left:0;
      height: 3rem;
      border:0;
      width:100%;
      cursor: pointer;
      box-shadow:0.10rem 0.10rem rgba(0, 0, 0, 0.075);
    }

</style>
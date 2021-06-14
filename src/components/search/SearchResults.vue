<template>
    <div class="content-wrapper content-wrapper__inner" >
      <filterComponent :smScreen="smScreen" :total-results="totalResults" v-if="totalResults"/>
      <Loader v-if="pageLoading && !searchResultItems"></Loader>

        <div class="search-results" v-if="searchResultItems && !pageLoading">
            <article v-for="item in searchResultItems" :key="item.index">
                <VideoCard :item="item" v-if="item.id.kind.split('#')[1] == 'video'"></VideoCard>
                <PlaylistCard :item="item" v-else-if="item.id.kind.split('#')[1] == 'playlist'"></PlaylistCard>
                <ChannelCard :item="item" v-else></ChannelCard>
            </article>

          <LoadMoreButton :loadMore="loadMore" :smScreen="smScreen" :totalResults="totalResults" :dataItems="searchResultItems" @load-more="loadMoreResults"></LoadMoreButton>
          <Loader v-if="loadMore && !smScreen" :loadMore="loadMore"></Loader>
      </div>
    </div>

</template>


<script>
  import VideoCard from '../video/VideoCard.vue';
  import PlaylistCard from '../playlist/PlaylistCard.vue';
  import ChannelCard from '../channel/ChannelCard.vue';
  import generalMixin from "../../mixins/generalMixin";
  import FilterComponent from './FilterComponent.vue';
  import Loader from '../layout/Loader.vue';
  import LoadMoreButton from '../layout/LoadMoreButton.vue';



  export default {
    components: {
      PlaylistCard,
      VideoCard,
      ChannelCard,
      FilterComponent,
      Loader,
      LoadMoreButton
    },
    data() {
      return {
        loadMore:false,
        nextPage:null,
        totalResults:null,
        searchResultItems:'',
        apiKey:this.$store.state.apiKey,
      };
    },

    methods: {

      LoadMoreLgScreen(){
          const scrolled_item = document.getElementById('app');
          scrolled_item.addEventListener('scroll', e => {
          if(scrolled_item.scrollTop + scrolled_item.clientHeight >= scrolled_item.scrollHeight) {
            this.loadMoreResults()

          }
        });
      },
      // load more items
      loadMoreResults(){
        this.loadMore=true;
        const url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}&pageToken=${this.nextPage}&type=${this.type}&order=${this.order}`;
          this.axios.get(url).then((res) => {
            this.searchResultItems = [...this.searchResultItems,...res.data.items];
            this.loadMore=false;
        }).catch(err=>console.log(err))
      },
      setValues(){
        if(this.$store.state.allSearchResults){
          this.searchResultItems = this.$store.state.allSearchResults.items
          this.totalResults = this.$store.state.allSearchResults.pageInfo.totalResults;
          this.nextPage = this.$store.state.allSearchResults.nextPageToken;
          console.log('hello')
        }

      }
    },
    props:['smScreen'],

    computed:{
      searchText(){
        return this.$store.state.searchText;
      },
      allSearchResults(){
        return this.$store.state.allSearchResults
      },
      type(){
          return this.$store.state.typeFilter
      },
      order(){
        return this.$store.state.orderFilter
      },
      pageLoading(){
        return this.$store.state.pageLoading;
      }
    },

    mixins: [generalMixin],

    watch:{
      allSearchResults:{
        handler:'setValues',
        immediate:true
      },
      type:{
        handler:'getAllSearchResults',
        deep:true

      },
      order:{
        handler:'getAllSearchResults',
        deep:true
      },
    },
    mounted(){
      if(!this.smScreen){
        this.LoadMoreLgScreen()
      }
    }

  };
</script>

<style  lang="scss" scoped>
  @import '../../scss/mixins.scss';
  .content-wrapper,.search-results{
    width:100%;
  }

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
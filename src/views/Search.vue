<template>
  <section class="content-wrapper" :class="{'isLoading':pageLoading}" id="search-result">
      <Loader v-if="pageLoading"></Loader>
      <div class="content-wrapper--inner" v-if="!pageLoading">
          <CardItem :item="item" v-for="item in searchResultItems" :key="item.index"></CardItem>
      </div>
        <button v-if="searchResultItems.length<totalResults && !pageLoading" @click="loadMoreResults">
          <span v-if="!loadMore">Show more items</span>
          <Loader v-if="loadMore" :loadMore="loadMore"></Loader>

        </button>
  </section>
</template>

<script>
import axios from 'axios'
import CardItem from '../components/CardItem.vue';
import Loader from '../components/layout/Loader.vue';

export default {
   components: {
    CardItem,
    Loader
  },
  data() {
    return {
      searchResultItems: [],
      loadMore:false,
      nextPage:'',
      totalResults:'',
      apiKey:'AIzaSyAV9QB6U-fWmof74zSqNOaNTo_itvkV_4I',
      pageLoading:false,
    };
  },

  methods: {
    //Search Results
    loadSearchResults() {
      this.pageLoading=true;
      const url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}`;
      this.axios.get(url).then((res) => {
        this.searchResultItems = res.data.items;
        this.totalResults=res.data.pageInfo.totalResults
        this.nextPage = res.data.nextPageToken;
        this.pageLoading=false;
      }).catch(err=>console.log(err))
    },

    // load more items
    loadMoreResults(){
      this.loadMore=true;
      const url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}&pageToken=${this.nextPage}`;
        axios.get(url).then((res) => {
          this.searchResultItems = [...this.searchResultItems,...res.data.items];
          this.loadMore=false;

       }).catch(err=>console.log(err))
    }
  },

  computed:{
    searchText(){
      return this.$store.state.searchText;
    }
  },
  watch: {
    searchText: {
      handler: 'loadSearchResults',
      immediate: true,
    },
  },

};
</script>

<style scoped lang="scss">
  @import '../scss/mixins.scss';

  #search-result{
    padding:2rem 0.5rem 4rem 0.5rem;
    margin:1rem;
    background-color:#fff;
    position: relative;
    min-height: 100vh;
    @media screen and (min-width:768px){
      padding:5rem 0 0 0;
    }
    &.isLoading{
      @include display-flex(row,center,center);
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
  }
</style>

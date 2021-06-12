<template>
  <section class="content-wrapper"  id="search-result">
    <!-- <Loader v-if="pageLoading && smScreen"></Loader> -->
    <SearchResults />

  </section>
</template>

<script>
import SearchResults from '../components/search/SearchResults.vue';
import Loader from '../components/layout/Loader.vue';

  export default{
    components:{
      SearchResults,
      Loader,

    },

    computed:{
      pageLoading(){
        return this.$store.state.pageLoading
      },
    },
  }
</script>


<style lang="scss" scoped>
  @import '../scss/mixins.scss';
  #search-result{
    @include display-flex(column,flex-start,flex-start);
  }

  .isLoading{
    @include display-flex(row,center,center);
  }
</style>





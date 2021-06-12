<template>
  <section class="content-wrapper"  id="search-result">
    <SearchResults :smScreen="smScreen"/>

  </section>
</template>

<script>
import SearchResults from '../components/search/SearchResults.vue';

  export default{
    components:{
      SearchResults,
    },
    props:['smScreen']


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





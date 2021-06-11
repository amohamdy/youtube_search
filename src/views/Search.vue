<template>
  <section class="content-wrapper"  id="search-result">
    <Loader v-if="pageLoading"></Loader>
    <SearchResults  :class="{'isLoading':pageLoading}"  v-if="!pageLoading"/>

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
    .isLoading{
      @include display-flex(row,center,center);
    }
</style>





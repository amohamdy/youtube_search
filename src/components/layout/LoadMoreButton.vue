<template>
    <button v-if="dataItems.length<totalResults && smScreen" @click="loadMoreItems ">
        <span v-if="!loadMore">Show more items</span>
        <Loader v-if="loadMore" :loadMore="loadMore"></Loader>
    </button>

</template>

<script>
import Loader from './Loader.vue';
export default{
    components:{
        Loader
    },
    methods:{
        loadMoreItems(){
            this.$emit('load-more')
        }
    },
    props:['loadMore', 'smScreen', 'totalResults', 'dataItems']
}

</script>

<style lang="scss" scoped>
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
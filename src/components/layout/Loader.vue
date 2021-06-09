<template>
    <div>
        <img src="../../assets/loader.gif" :class="{'sm':loadMore}">
        <span v-if="!loadMore">Loading...</span>
    </div>
</template>


<script>
    export default{
        props:['loadMore']
    }
</script>

<style scoped lang="scss">
  @import '../../scss/mixins.scss';

    div{
        @include display-flex(column,center,center);
        span{
            display:block;
            margin-top:16px;
        }
        img{
            width:80px;
            &.sm{
                width:40px;
            }
        }
    }

</style>
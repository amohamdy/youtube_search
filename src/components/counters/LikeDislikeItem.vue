<template>
   <button class="social-btn" :class="{dislike:name=='dislike'}">
        <img :src="require('../../assets/'+img+'.svg')">
        <span>{{data}}</span>
    </button>

</template>
<script>
    export default{
        props:['data', 'img', 'name']


    }
</script>

<style lang="scss" scoped>
  @import '../../scss/mixins.scss';
  @import '../../scss/variables.scss';
.social-btn{
    background-color:transparent !important;
    @include display-flex(row,flex-start,center);
    border:0;
    &:not(:last-of-type){
    margin-right:6px;
    }
    img{
        fill:$gray-300;
        width:22px !important;
        height:22px !important;
        margin-right:6px;
    }
    }
    .dislike{
        img{
            transform:rotate(180deg);
            margin-top:8px;
        }
    }
</style>
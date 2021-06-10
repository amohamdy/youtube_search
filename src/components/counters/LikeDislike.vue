<template>
    <div class="social-wrapper">
        <div class="like-dislike">
            <LikeDislikeItem :data="stat.likeCount" img="like" name='like'/>
            <LikeDislikeItem :data="stat.dislikeCount" img="like" name='dislike'/>
            <!-- <LikeDislikeItem data="share" img="share"/>
            <LikeDislikeItem data="save" img="save"/> -->
        </div>

    </div>
</template>

<script>
import LikeDislikeItem from './LikeDislikeItem.vue';
    export default {
        name: 'LikeDislike',
        props:['stat'],
        components:{
            LikeDislikeItem
        }
    };
</script>

<style scoped lang="scss">
  @import '../../scss/mixins.scss';

.like-dislike{
    @include display-flex(row,flex-start,center);

    }

</style>

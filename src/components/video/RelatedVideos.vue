<template>
    <section id="related-videos">
        <VideoCard v-for="item in relatedVideos" :key="item.index" :item="item"/>
    </section>

</template>

<script>
    import VideoCard from './VideoCard.vue';
    export default{
        components:{
            VideoCard
        },
        props:['apiKey', 'videoId'],
        data(){
            return{
                relatedVideos:'',
            }
        },
        created(){
         const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.videoId}&type=video&key=${this.apiKey}`;
         this.axios.get(url).then(res=>
         {this.relatedVideos=res.data.items;
         console.log(res.data)}).catch(err=>console.log(err))
        }
    }

</script>


<style lang="scss" scoped>
    section{
        margin-top:16px;
    }

</style>
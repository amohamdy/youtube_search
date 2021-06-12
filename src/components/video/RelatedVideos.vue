<template>
    <section id="related-videos">
        <VideoCard v-for="item in relatedVideos" :key="item.index" :item="item"/>
            <button v-if="relatedVideos.length<totalResults && smScreen" @click="loadMoreResults ">
              <span v-if="!loadMore">Show more items</span>
              <Loader v-if="loadMore" :loadMore="loadMore"></Loader>
            </button>
        <Loader v-if="loadMore && !smScreen" :loadMore="loadMore"></Loader>

    </section>

</template>

<script>
    import VideoCard from './VideoCard.vue';
    import Loader from '../layout/Loader.vue';
    export default{
        components:{
            VideoCard,
            Loader
        },
        props:['apiKey', 'videoId', 'smScreen'],
        data(){
            return{
                relatedVideos:'',
                loadMore:false,
                totalResults:'',
                nextPage:''

            }
        },
        methods:{
            LoadMoreLgScreen(){
            const scrolled_item = document.getElementById('app');
            scrolled_item.addEventListener('scroll', e => {
            if(scrolled_item.scrollTop + scrolled_item.clientHeight >= scrolled_item.scrollHeight) {
                this.loadMoreResults()

            }
            });
        },
            loadMoreResults(){
                this.loadMore=true;
                const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.videoId}&type=video&key=${this.apiKey}&pageToken=${this.nextPage}`;
                this.axios.get(url).then((res) => {
                    this.relatedVideos = [...this.relatedVideos,...res.data.items];
                    this.loadMore=false;
                }).catch(err=>console.log(err))
        },
            },
        created(){
            const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.videoId}&type=video&key=${this.apiKey}`;
            this.axios.get(url).then(res=>
                 {
                this.relatedVideos=res.data.items;
                this.totalResults=res.data.pageInfo.totalResults;
                this.nextPage=res.data.nextPageToken;
                console.log(res.data)
                }).catch(err=>console.log(err));
            this.LoadMoreLgScreen();

            }
    }

</script>


<style lang="scss" scoped>
    section{
        margin-top:16px;

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
<template>
    <section id="playlist-details">
        <article v-for="item in playlistItems" :key="item.index">
            <VideoCard :item="item"  playList="true"></VideoCard>
        </article>


        <LoadMoreButton :loadMore="loadMore" :smScreen="smScreen" :totalResults="totalResults" :dataItems="playlistItems" @load-more="loadMoreResults"></LoadMoreButton>

        <Loader v-if="loadMore && !smScreen" :loadMore="loadMore"></Loader>
    </section>
</template>

<script>
    import VideoCard from '../components/video/VideoCard.vue';
    import Loader from '../components/layout/Loader.vue';
    import LoadMoreButton from '../components/layout/LoadMoreButton.vue';

    export default{
        data(){
            return{
                apiKey:this.$store.state.apiKey,
                playlistItems:'',
                loadMore:false,
                totalResults:'',
                nextPage:'',
                // playlistDetails:''
            }
        },
        components:{
            VideoCard,LoadMoreButton, Loader
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
                const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.id}&key=${this.apiKey}&pageToken=${this.nextPage}`;
                this.axios.get(url).then((res) => {
                    this.playlistItems = [...this.playlistItems,...res.data.items];
                    this.loadMore=false;
                }).catch(err=>console.log(err))
            },

        },
        props:['id', 'smScreen'],

        created(){
            const url=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.id}&key=${this.apiKey}`
            this.axios.get(url).then(res=>{
                // this.playlistDetails=res.data
                this.playlistItems=res.data.items;
                this.nextPage=res.data.nextPageToken;
                this.totalResults=res.data.pageInfo.totalResults;
                }).catch(err=>console.log(err))
            },
        mounted(){
            if(!this.smScreen){
                this.LoadMoreLgScreen();
            }
        }
    }

    </script>



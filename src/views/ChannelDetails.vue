<template>
    <div class="channel-details">

        <section v-if="channelDetails">
            <div class="content">
                <div class="media">
                    <img :src="channelDetails.snippet.thumbnails.default.url" alt="">
                </div>
            </div>

            <div class="content">
                <h2>{{channelDetails.snippet.title!=null ? channelDetails.snippet.title : ''}}</h2>
                <div>Subscribe<span>{{channelDetails.statistics.subscriberCount}}</span> </div>
            </div>

        </section>
        <section id="channel-playlists" v-if="channelPlaylists">
            <article v-for="item in channelPlaylists" :key="item.index">
                <PlaylistCard :item="item"/>

            </article>

        </section>


    </div>

</template>

<script>
import PlaylistCard from '../components/playlist/PlaylistCard.vue';
    export default{
        data(){
            return{
                apiKey:this.$store.state.apiKey,
                channelDetails:'',
                channelPlaylists:''
            }
        },
        components:{
            PlaylistCard
        },
        props:['id'],

        methods:{
            getChannelDetail(){
                const url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${this.id}&key=${this.apiKey}`
            this.axios.get(url).then(res=>{
                console.log('channel'+res)
                this.channelDetails=res.data.items[0]

            }).catch(err=>console.log(err))
            },
            getChannelPlaylists(){
            const url=`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${this.id}&maxResults=25&key=${this.apiKey}`
            this.axios.get(url).then(res=>{
                this.channelPlaylists=res.data.items

            }).catch(err=>console.log(err))

            }
        },
        created(){
          this.getChannelDetail();
          this.getChannelPlaylists();
        },
    }
</script>

<style lang="scss" scoped>
    @import '../scss/variables.scss';
    @import '../scss/mixins.scss';

.channel-details{
    .media{
        display:flex;
        border-radius:50%;
        img{
            object-fit:cover;
            border-radius: 50%;
        }
    }
    .content{
        background-color:$gray-100;
        padding:2rem;
        &:first-of-type{
            background-color: #fff;
            position: relative;
            .media{
                left: 0;
                position: absolute;
                bottom: -50%;
            }
        }
        div{
            color:$red-100;
            span{
                color:$gray-300;
                margin-left:8px;
            }
        }
    }

}


</style>
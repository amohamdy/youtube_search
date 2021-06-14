<template>
<div class="filter-wrapper">
    <div class="filters" v-if="smScreen">

        <select v-model="type" @change="commitTypeValue">
            <option disabled value="">Type</option>
            <option>Video</option>
            <option>Channel</option>
            <option>Playlist</option>
        </select>

        <select v-model="date" @change="commitDateValue">
            <option disabled value="">date</option>
            <option>Last Hour</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>

        </select>


    </div>
     <div class="filters" v-if="!smScreen">
        <div class="top">
            <h4>About {{totalResults}} Results</h4>
            <a @click="toggle">
                <img src="../../assets/filter.svg">
                filter
            </a>
        </div>
        <div class="bottom" v-if="this.filterShow">
            <ul>
                <li>Type</li>
                <li>
                    <input type="checkbox" id="video" value="video" v-model="type" @change='commitTypeValue'>
                    <label for="video">video</label>
                </li>
                <li>
                    <input type="checkbox" id="channel" value="channel" v-model="type" @change='commitTypeValue'>
                    <label for="channel">channel</label>
                </li>
                <li>
                    <input type="checkbox" id="playlist" value="playlist" v-model="type" @change='commitTypeValue'>
                    <label for="playlist">playlist</label>

                </li>
            </ul>
            <ul>
                <li>Date</li>
                <li>
                    <input type="radio" id="lastHour" value="lastHour" v-model="date" @change='commitDateValue'>
                    <label for="lastHour">last hour</label>
                </li>
                <li>
                    <input type="radio" id="today" value="today" v-model="date" @change='commitDateValue'>
                    <label for="today">today</label>
                </li>
                <li>
                    <input type="radio" id="thisWeek" value="thisWeek" v-model="date" @change='commitDateValue'>
                    <label for="thisWeek">this week</label>

                </li>
                 <li>
                    <input type="radio" id="thisMonth" value="thisMonth" v-model="date" @change='commitDateValue'>
                    <label for="thisMonth">this month</label>

                </li>
            </ul>
            <ul>
                <li>Sort By</li>
                <li>
                    <input type="radio" id="relevance" value="relevance" v-model="order" @change='commitOrderValue'>
                    <label for="relevance">relevance</label>
                </li>
                <li>
                    <input type="radio" id="date" value="date" v-model="order" @change='commitOrderValue'>
                    <label for="date">upload date</label>
                </li>
                <li>
                    <input type="radio" id="viewCount" value="viewCount" v-model="order" @change='commitOrderValue'>
                    <label for="viewCount">view count</label>
                </li>
                <li>
                    <input type="radio" id="rating" value="rating" v-model="order" @change='commitOrderValue'>
                    <label for="rating">rating</label>
                </li>
            </ul>



        </div>

</div>
</div>
</template>


<script>
    export default{
        data(){
            return{
                type:[],
                date:'',
                filterShow:false,
                order:''

            }
        },

        props:['smScreen', 'totalResults'],
        methods:{
            commitTypeValue(){
                this.$store.commit('setTypeValue', this.type)
            },
             commitDateValue(){
                this.$store.commit('setDateValue', this.date)
            },
             commitOrderValue(){
                this.$store.commit('setOrderValue', this.order)
            },
            toggle(){
                this.filterShow = !this.filterShow;
                console.log('hello')
            }
        }
    }
</script>


<style lang="scss" scoped>
  @import '../../scss/mixins.scss';
  @import '../../scss/variables.scss';

.filter-wrapper{
    width:100%;
     .filters{
        padding-bottom:1.5rem;
        @media screen and (min-width:768px){
            padding-bottom:0;
        }
    }
    select{
        height: 30px;
        padding-inline: 16px;
        margin-left:16px;
    }
    .top{
        @include display-flex(row,space-between,center);
        padding: 1rem;
        width:70%;
        margin:0 auto;
        border-bottom:1px solid $gray-150;
        margin-bottom:2rem;
        a{
            @include display-flex(row,center,center);
            cursor: pointer;
            img{
                width:25px;
                height: 25px;
                transform: rotate(90deg);
                margin-right:8px;
            }
        }

    }
    .bottom{
        width:70%;
        margin:0 auto;
        padding:0 2rem 2rem;
        @include display-flex(row,space-between,center);
        ul{
            li{
                // input{
                //     display:none
                // }
                &:first-of-type{
                    margin-bottom:16px;
                    font-weight:bold
                }
                text-transform:capitalize;
                text-align: left;
            }
        }
    }



}



</style>
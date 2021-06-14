<template>
    <form id="search-form">
        <div class=" search-form-input">
            <input type="search" v-model="searchText" placeholder="Search" @keydown.enter="submitForm" v-if="!smScreen">
            <input type="search" v-model="searchText" placeholder="Search" @keydown.enter="submitForm" v-if="smScreen && isShow">
            <span span v-if="!isShow && smScreen">{{searchText}}</span>

            <button class="search-btn" @click.prevent="smScreen?isShow = !isShow:submitForm">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                class="style-scope yt-icon" style="s
                display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3
                9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5
                4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14
                7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path>
                </g></svg>
            </button>
        </div>
    </form>
</template>

<script>
  import generalMixin from "../../mixins/generalMixin";

export default {
  name: 'SearchForm',

  props: ['smScreen'],
  data() {
    return {
      searchText: '',
      isShow: '',
      windowWidth:window.innerWidth,

    };
  },
  methods: {
    submitForm(){
      this.isShow = false;
      this.$store.commit("setSearchKeyword", this.searchText);
      this.$emit('submit-form')
    }


  },
  mixins: [generalMixin],

};
</script>


<style scoped lang="scss">
  @import '../../scss/mixins.scss';
  @import '../../scss/variables.scss';

  #search-form{
        border:0;
        width:80%;
        margin:0;
      @media screen and (min-width:768px){
        width:50%;
        border:1px solid $gray-150;
        border-radius:2px;
      }
      .search-form-input{
        @include display-flex(row,space-between,center);
        color:#fff !important;
        @media screen and (min-width:768px){
            height:40px;
            @include display-flex(row,flex-end,center);
        }
        input{
          width:80%;
          height:40px;
          padding:8px;
          display:block;
          @media screen and (min-width:768px){
            height:100%;
            border:0;
            width:87%;
            padding:0 16px;
            }

          &::placeholder{
            font-size:16px;
          }
          &:focus{
            box-shadow:none;
            outline:none;
          }
          &.is-active{
          border:0;
          background-color: transparent;
          }
        }
        .search-btn{
          background-color: transparent;
          border:0;
          cursor: pointer;
          svg{
            width:30px !important;
            height:30px !important;
            fill:#fff;
            @media screen and (min-width:768px){
              width:20px !important;
              height:20px !important;
              margin:auto;
              fill:#000;
            }
          }
          @media screen and (min-width:768px){
            height:100%;
            width:13%;
            background-color:$gray-100;
            border-left:1px solid $gray-150;
          }
            &:focus{
              box-shadow:none;
              outline:none;
            }

          }
    }

  }

</style>
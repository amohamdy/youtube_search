<template>
  <nav class="main-nav">
    <div class="main-nav__inner">
      <img alt="YouTybe logo" class="yTube-logo" src="../../assets/YouTube.png">
      <img alt="YouTybe logo" class="yTube-logo--white" src="../../assets/Daco_492.png">

      <SearchForm></SearchForm>

    </div>
  </nav>

</template>

<script>
  import SearchForm from '../search/SearchForm.vue';

  export default{
    components:{
      SearchForm
    }
  }

</script>



<style scoped lang="scss">
  @import '../../scss/mixins.scss';
  @import '../../scss/variables.scss';

.main-nav{
    box-shadow:0 .125rem .25rem rgba(0,0,0,.075);
    width:100%;
    height: 3.5rem;
    @include display-flex(row,center,center);
    background-color:$red-100;
    padding:1rem;
    @media screen and (min-width:768px){
        background-color:#fff;
        position:fixed;
        z-index:999;
        top:0;
        left:0;
    }

  &__inner{
    @include display-flex(row,space-between,center);
    width:100%;
    margin:0 auto;
    @media screen and (min-width:768px) and (max-width:1199.98px){
        width:80%;
    }
    @media screen and (min-width:1200px){
        width:70%;
    }
    .yTube-logo{
      display:none;
      @media screen and (min-width:768px){
        width:170px;
        display: block;
      }
      &--white{
        width:60px;
        @media screen and (min-width:768px){
          display:none;
        }
      }
    }


}
}

</style>

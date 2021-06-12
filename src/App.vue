<template>
  <main class="container-fluid" id="app">
    <Header :smScreen="smScreen"/>
    <div class="container-fluid__inner" id="main-wrapper">
    <router-view :key="$route.fullPath" :smScreen="smScreen"/>

    </div>
  </main>
</template>

<style lang="scss">

.container-fluid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @media screen and (min-width:992px){
  height: 100vh;
overflow-y:scroll;
  }

  &__inner{
    padding:2rem 0.5rem 4rem 0.5rem;
    margin:1rem;
    background-color:#fff;
    position: relative;
    min-height: 100vh;
    @media screen and (min-width:768px){
      padding:5rem 0 0 0;
      width:80%;
      margin:0 auto;

    }
  }

}


</style>

<script>
import Header from './components/layout/Header.vue';

export default {
  components:
  {
    Header,
  },
  data(){
    return{
      smScreen:'',
      windowWidth:window.innerWidth,
    }
  },
  methods:{
    checkWindowSize(){
      if(this.windowWidth > 768){
        this.smScreen = false;
      }else{
        this.smScreen=true
      }
    },
  },
  watch:{
      windowWidth:{
      handler:'checkWindowSize',
      immediate:true
    },
  }

};
</script>

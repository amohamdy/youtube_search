<template>
  <main class="container-fluid" id="app">
    <Header/>
    <div class="container-fluid__inner">
    <router-view/>

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
};
</script>

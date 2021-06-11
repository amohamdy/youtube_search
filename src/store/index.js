import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: null,
    apiKey:'AIzaSyB_EfmkkjsF5hK4ycQo9HgMANvWqAimRIw',
    pageLoading:false,
    searchResults:''

  },
  mutations: {
    setSearchKeyword(state, value) {
      return (state.searchText = value)
    },
    setSearchResults (state, value) {
      return(state.searchResults = value)
    },
    setPageLoadingStatus (state, value) {
      return(state.pageLoading = value)
    },

  },

  modules: {
  },

});

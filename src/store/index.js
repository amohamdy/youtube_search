import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: null,
    apiKey:'AIzaSyA59bgvVaJLFrL_-utKXIboO8qSqY_zdTg',
    pageLoading:false,
    allSearchResults:'',
    typeFilter:null,
    dateFilter:null,
    orderFilter:"relevance"

  },
  mutations: {
    setSearchKeyword(state, value) {
      return (state.searchText = value)
    },
    setSearchResults (state, value) {
      return(state.allSearchResults = value)
    },
    setPageLoadingStatus (state, value) {
      return(state.pageLoading = value)
    },
    setTypeValue (state, value) {
      return(state.typeFilter = value)
    },
    setDateValue (state, value) {
      return(state.dateFilter = value)
    },
    setOrderValue (state, value) {
      return(state.orderFilter = value)
    },

  },

  modules: {
  },

});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: null,
    apiKey:'AIzaSyA_p7BYgDkYWBMEEeH5J5tWJ0ZXwbok7Ek',
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

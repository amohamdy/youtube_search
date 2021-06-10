import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: null,
    apiKey:'AIzaSyAV9QB6U-fWmof74zSqNOaNTo_itvkV_4I',

  },
  mutations: {
    setSearchValue(state, value) {
      return (state.searchText = value)
    },
  },
  actions: {
    updateSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    },
  },
  modules: {
  },
  // getters: {
  //   searchText: state => {
  //     return state.searchText
  //   },
  // },
});

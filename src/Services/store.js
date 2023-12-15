
import Vuex from 'vuex';

// Use Vuex without explicitly importing Vue
const store = new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('startLoading');
    },
    stopLoading({ commit }) {
      commit('stopLoading');
    },
  },
});

export default store;
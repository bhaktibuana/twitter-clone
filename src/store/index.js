import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "hexorascii",
    userData: null,
    pageName: "",
  },
  getters: {},
  mutations: {
    setPageName(state, pageName) {
      state.pageName = pageName;
    },

    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
  },
  modules: {},
});

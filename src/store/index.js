import { createStore } from "vuex";

export default createStore({
  state: {
    pageName: "",
  },
  getters: {},
  mutations: {
    setPageName(state, pageName) {
      state.pageName = pageName;
    },
  },
  actions: {},
  modules: {},
});

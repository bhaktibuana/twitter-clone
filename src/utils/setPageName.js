import { useStore } from "vuex";
import { computed } from "vue";

const setPageName = (value) => {
  const store = useStore();
  const pageName = computed(() => store.state.pageName);

  const changePageName = () => {
    store.commit("setPageName", value);
  };

  return { pageName, changePageName };
};

export default setPageName;
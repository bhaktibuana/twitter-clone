import { computed, ref } from "vue";
import { useStore } from "vuex";

const getUserData = (username) => {
  const userData = ref([]);
  const isLoading = ref(false);
  const isError = ref(false);
  const store = useStore();
  const userState = computed(() => store.state.userData);

  const fetchData = async () => {
    isLoading.value = true;

    try {
      const localData = await JSON.parse(localStorage.getItem("user"));

      if (localData) {
        userData.value = localData.filter(
          (user) => user.username === username
        )[0];

        if (userState.value === null) {
          store.dispatch(
            "setUserData",
            localData.filter((user) => user.username === username)[0]
          );
        }

        isLoading.value = false;
      } else {
        isLoading.value = false;
        throw new Error("No data found");
      }
    } catch (error) {
      isError.value = true;
      isLoading.value = false;
    }
  };

  return { userData, isLoading, isError, fetchData };
};

export default getUserData;

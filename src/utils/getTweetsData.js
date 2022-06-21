import { ref } from "vue";

const getTweetsData = () => {
  const tweetsData = ref([]);
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchTweetsData = async () => {
    isLoading.value = true;

    try {
      const localData = await JSON.parse(localStorage.getItem("tweets"));

      if (localData) {
        localData.sort((a, b) => b.tweet_id - a.tweet_id);
        tweetsData.value = localData;
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

  return { tweetsData, isLoading, isError, fetchTweetsData };
};

export default getTweetsData;

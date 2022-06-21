import { ref } from "vue";

const postTweetData = (data) => {
  const isLoading = ref(false);
  const isError = ref(false);

  const postTweet = async () => {
    isLoading.value = true;

    try {
      const localData = await JSON.parse(localStorage.getItem("tweets"));

      if (localData) {
        if (localData.length > 0) {
          const lastTweet = localData[localData.length - 1];
          const lastId = lastTweet.tweet_id;
          data.tweet_id = lastId + 1;
          localData.push(data);
          localStorage.setItem("tweets", JSON.stringify(localData));
          isLoading.value = false;
        } else {
          data.tweet_id = 1;
          localData.push(data);
          localStorage.setItem("tweets", JSON.stringify(localData));
          isLoading.value = false;
        }
      } else {
        isLoading.value = false;
        throw new Error("Failed post data");
      }
    } catch (error) {
      isError.value = true;
      isLoading.value = false;
      console.log(error);
    }
  };

  postTweet();

  return { isLoading, isError };
};

export default postTweetData;

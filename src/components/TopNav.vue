<template>
  <div class="top-nav">
    <div class="history-icon" v-if="showHistory">
      <button class="icon" @click="handleGoBack">
        <font-awesome-icon icon="fa-solid fa-arrow-left" size="1x" />
      </button>
    </div>

    <div class="nav-info" v-if="isProfile">
      <h1 class="nav-title">{{ userData.name }}</h1>
      <p class="nav-subtitle">{{ tweets }}</p>
    </div>

    <div class="nav-info" v-else>
      <h1 class="nav-title">{{ pageName }}</h1>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import getUserData from "../utils/getUserData";

export default {
  props: ["pageName"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const showHistory = ref(false);
    const isProfile = ref(false);
    const userName = computed(() => store.state.userName);
    const { userData, fetchData } = getUserData(userName.value);

    const tweets = computed(() => {
      const tweetsData = JSON.parse(localStorage.getItem("tweets"));

      if (tweetsData.length > 0) {
        const userTweet = tweetsData.filter(
          (tweet) => tweet.user_id === userData.value.id
        );

        if (userTweet.length > 1) {
          return `${userTweet.length.toLocaleString("en-US")} Tweets`;
        } else {
          return `${userTweet.length} Tweet`;
        }
      } else {
        return `0 Tweet`;
      }
    });

    const condition = (pageName) => {
      if (pageName === "Profile") {
        isProfile.value = true;
      } else {
        isProfile.value = false;
      }

      if (pageName === "Home") {
        showHistory.value = false;
      } else {
        showHistory.value = true;
      }
    };

    const handleGoBack = () => {
      router.go(-1);
    };

    onMounted(() => {
      condition(props.pageName);
      fetchData();
    });

    return {
      handleGoBack,
      showHistory,
      isProfile,
      userData,
      tweets,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  position: sticky;
  width: 100%;
  height: 53px;
  top: 0;
  z-index: 3;
  background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82),
    rgba(255, 255, 255, 0.8) 110.84%
  );
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  padding: 0 16px;
  align-items: center;
  justify-content: center;

  & > .history-icon {
    display: flex;
    min-width: 53px;
    height: 100%;
    align-items: center;

    & > button.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 2rem;
      background: transparent;
      border: none;
      font-size: 1rem;
      color: var(--TEXT_COLOR_0);
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--BG_COLOR_4);
      }
    }
  }

  & > .nav-info {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    & > h1.nav-title {
      font-size: 20px;
      font-weight: bold;
      color: var(--TEXT_COLOR_0);
    }

    & > p.nav-subtitle {
      font-size: 13px;
      color: var(--TEXT_COLOR_1);
    }
  }
}
</style>

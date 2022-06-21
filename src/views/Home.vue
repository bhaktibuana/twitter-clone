<template>
  <div class="home">
    <div class="left-content-container">
      <TopNav :pageName="'Home'" />

      <div class="page-content">
        <Compose />

        <div class="line-break" />

        <div
          class="tweets-container"
          v-for="td in tweetsData"
          :key="td.tweet_id"
        >
          <Tweet
            :tweetId="td.tweet_id"
            :userId="td.user_id"
            :tweetDate="td.posted"
            :tweetText="td.tweet"
          />
        </div>
      </div>
    </div>

    <div class="right-content-container">
      <div
        class="right-content"
        :style="{ top: `${topOffset}px` }"
        ref="rghtContent"
      >
        <Search />
        <Trends />
        <Suggest />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";
import setPageName from "../utils/setPageName";
import Search from "../components/Search.vue";
import Trends from "../components/trends/Trends.vue";
import Suggest from "../components/suggest/Suggest.vue";
import Footer from "../components/Footer.vue";
import TopNav from "../components/TopNav.vue";
import Compose from "../components/Compose.vue";
import Tweet from "../components/Tweet.vue";
import getTweetsData from "../utils/getTweetsData";

export default {
  components: {
    Search,
    Trends,
    Suggest,
    Footer,
    TopNav,
    Compose,
    Tweet,
  },
  setup() {
    const { pageName, changePageName } = setPageName("Home");
    const rghtContent = ref(null);
    const topOffset = ref(0);
    const { tweetsData, fetchTweetsData } = getTweetsData();

    const countOffset = (elHeight) => {
      const result = window.innerHeight - elHeight;
      return Math.abs(result) * -1;
    };

    onUpdated(() => {
      topOffset.value = countOffset(rghtContent.value.clientHeight);
    });

    onMounted(() => {
      changePageName();
      topOffset.value = countOffset(rghtContent.value.clientHeight);
      fetchTweetsData();
    });

    return {
      pageName,
      rghtContent,
      topOffset,
      tweetsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  @media screen and (min-width: 500px) {
    left: var(--SIDE_NAV_WIDTH_0);
    width: calc(100% - var(--SIDE_NAV_WIDTH_0));
  }

  @media screen and (min-width: 617px) {
    left: var(--SIDE_NAV_WIDTH_1);
    width: calc(100% - var(--SIDE_NAV_WIDTH_1));
  }

  @media screen and (min-width: 705px) {
    width: var(--CONTENT_WIDTH_0);
    left: calc(
      ((100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_0))) / 2) +
        var(--SIDE_NAV_WIDTH_1)
    );
  }

  @media screen and (min-width: 1005px) {
    justify-content: space-between;
    width: var(--CONTENT_WIDTH_1);
    left: calc(
      ((100% - (var(--SIDE_NAV_WIDTH_0) + var(--CONTENT_WIDTH_1))) / 2) +
        var(--SIDE_NAV_WIDTH_0)
    );
  }

  @media screen and (min-width: 1025px) {
    left: calc(
      ((100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_1))) / 2) +
        var(--SIDE_NAV_WIDTH_1)
    );
  }

  @media screen and (min-width: 1095px) {
    width: var(--CONTENT_WIDTH_2);
    left: calc(
      ((100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_2))) / 2) +
        var(--SIDE_NAV_WIDTH_1)
    );
  }

  @media screen and (min-width: 1282px) {
    left: calc(
      ((100% - (var(--SIDE_NAV_WIDTH_2) + var(--CONTENT_WIDTH_2))) / 2) +
        var(--SIDE_NAV_WIDTH_2)
    );
  }
}

.left-content-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-left: 1px solid var(--BG_COLOR_2);
  border-right: 1px solid var(--BG_COLOR_2);

  @media screen and (min-width: 688px) {
    width: var(--LEFT_CONTENT_WIDTH);
  }

  & > .page-content {
    display: flex;
    width: 100%;
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;

    & > .line-break {
      display: flex;
      width: 100%;
      height: 1px;
      margin: 4px 0;
    }

    & > .tweets-container {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
    }
  }
}

.right-content-container {
  display: none;
  margin-inline-end: 10px;
  flex-direction: column;

  @media screen and (min-width: 1005px) {
    display: flex;
    width: var(--RIGHT_CONTENT_WIDTH_0);
  }

  @media screen and (min-width: 1095px) {
    width: var(--RIGHT_CONTENT_WIDTH_1);
  }

  & > .right-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0 0 64px 0;
    position: sticky;
    top: 0;
  }
}
</style>

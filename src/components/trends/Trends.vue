<template>
  <div class="trends">
    <div class="trends-title-container">
      <h1 class="trends-title">Trends for you</h1>
    </div>

    <div v-for="trend in trends" :key="trend.id">
      <TrendsItem :name="trend.name" :tweets="trend.tweets" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TrendsItem from "./TrendsItem.vue";

export default {
  components: {
    TrendsItem,
  },
  setup() {
    const trends = ref([
      { id: 1, name: "Web Development", tweets: 2750 },
      { id: 2, name: "#codingForIndonesia", tweets: 24500 },
      { id: 3, name: "Glimpse of Us", tweets: 1160000 },
      { id: 4, name: "Doctor Lawyer", tweets: 8200 },
      { id: 5, name: "#kimSeJeong", tweets: 13500 },
      { id: 6, name: "Front-end Developer", tweets: 6300 },
      { id: 7, name: "Back-end Developer", tweets: 2600 },
    ]);

    return {
      trends,
    };
  },
};
</script>

<style lang="scss" scoped>
.trends {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  margin: 0 0 16px 0;
  padding: 0 0 16px;
  border-radius: 16px;
  background: var(--BG_COLOR_1);

  & > .trends-title-container {
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 16px;

    & > h1.trends-title {
      font-size: 20px;
      font-weight: bold;
      color: var(--TEXT_COLOR_0);
    }
  }
}
</style>

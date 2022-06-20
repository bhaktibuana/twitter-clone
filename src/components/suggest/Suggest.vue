<template>
  <div class="suggest">
    <div class="suggest-title-container">
      <h1 class="suggest-title">Who to follow</h1>
    </div>

    <div v-for="suggest in suggestions" :key="suggest.id">
      <SuggestItem
        :name="suggest.name"
        :username="suggest.username"
        :image="suggest.image"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SuggestItem from "./SuggestItem.vue";

export default {
  components: {
    SuggestItem,
  },
  setup() {
    const suggestions = ref([
      {
        id: 1,
        name: "IU",
        username: "dlwlrma",
        image: "lee-ji-eun.jpg",
      },
      {
        id: 2,
        name: "Kim Se-Jeong",
        username: "clean_0828",
        image: "kim-se-jeong.jpg",
      },
      {
        id: 3,
        name: "Elon Musk",
        username: "elonmusk",
        image: "elon-musk.jpg",
      }
    ]);

    return {
      suggestions,
    };
  },
};
</script>

<style lang="scss" scoped>
.suggest {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  margin: 0 0 16px 0;
  padding: 0 0 16px;
  border-radius: 16px;
  background: var(--BG_COLOR_1);

  & > .suggest-title-container {
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 16px;

    & > h1.suggest-title {
      font-size: 20px;
      font-weight: bold;
      color: var(--TEXT_COLOR_0);
    }
  }
}
</style>

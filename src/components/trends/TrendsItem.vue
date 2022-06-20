<template>
  <div class="trends-item">
    <p class="trend-title">Trending in Indonesia</p>
    <p class="trend-name">{{ name }}</p>
    <p class="trend-count">{{ tweetsCount }} Tweets</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["name", "tweets"],
  setup(props) {
    const tweetsCount = computed(() => {
      if (props.tweets > 1000000) {
        return `${(props.tweets / 1000000).toFixed(1)}M`;
      } else if (props.tweets > 1000) {
        return `${(props.tweets / 1000).toFixed(1)}K`;
      } else {
        return props.tweets;
      }
    });

    return {
      tweetsCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.trends-item {
  display: flex;
  width: 100%;
  height: auto;
  padding: 12px 16px;
  flex-direction: column;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--BG_COLOR_3);
  }

  & > p.trend-title {
    font-size: 13px;
    color: var(--TEXT_COLOR_1);
    margin: 0;
  }

  & > p.trend-name {
    font-size: 1rem;
    color: var(--TEXT_COLOR_0);
    font-weight: bold;
    margin: 4px 0 0 0;
  }

  & > p.trend-count {
    font-size: 13px;
    color: var(--TEXT_COLOR_1);
    margin: 6px 0 0 0;
  }
}
</style>

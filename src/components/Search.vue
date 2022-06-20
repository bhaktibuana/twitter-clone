<template>
  <div class="search">
    <div class="search-container" :class="{ active: isFocus }">
      <div class="search-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="1x" />
      </div>

      <input
        type="text"
        class="search"
        placeholder="Search Egg"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
    </div>

    <div class="search-info" :class="{ active: isFocus }">
      <div class="search-info-text">This feature is under development</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isFocus = ref(false);

    return {
      isFocus,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  width: 100%;
  height: 53px;
  margin: 0 0 12px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82),
    rgba(255, 255, 255, 0.8) 110.84%
  );
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  z-index: 3;

  & > .search-container {
    display: flex;
    width: 100%;
    height: 44px;
    border-radius: 2rem;
    border: 1px solid var(--BG_COLOR_2);
    background: var(--BG_COLOR_2);

    & > .search-icon {
      display: flex;
      width: 42px;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      padding-left: 12px;
      border-radius: 2rem 0 0 2rem;
      color: var(--TEXT_COLOR_1);
    }

    & > input.search {
      width: calc(100% - 42px);
      height: 100%;
      border: none;
      outline: none;
      padding: 12px;
      border-radius: 0 2rem 2rem 0;
      background: transparent;
      color: var(--TEXT_COLOR_0);

      &::placeholder {
        color: var(--TEXT_COLOR_1);
      }
    }

    &.active {
      border: 1px solid var(--PRIMARY_COLOR);
      background: var(--BG_COLOR_0);

      & > .search-icon {
        color: var(--PRIMARY_COLOR);
      }
    }
  }

  & > .search-info {
    display: none;
    position: absolute;
    width: calc(100% + 20px);
    height: auto;
    flex-direction: column;
    min-height: 100px;
    background: var(--BG_COLOR_0);
    top: 50px;
    border-radius: 8px;
    box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
      rgb(101 119 134 / 15%) 0px 0px 3px 1px;

    & > .search-info-text {
      display: flex;
      width: 100%;
      height: 52px;
      justify-content: center;
      align-items: center;
      padding: 20px 12px 12px;
      color: var(--TEXT_COLOR_1);
    }

    &.active {
      display: flex;
    }
  }
}
</style>

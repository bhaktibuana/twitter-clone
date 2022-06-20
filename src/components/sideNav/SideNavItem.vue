<template>
  <router-link
    class="nav-item"
    :class="{ active: pageName === title }"
    :to="{ name: title, params: param ? { param } : null }"
  >
    <div>
      <span class="icon">
        <font-awesome-icon :icon="'fa-solid ' + icon" size="1x" />
      </span>
      <span class="item-text">{{ title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["pageName", "title", "param", "icon"],
};
</script>

<style lang="scss" scoped>
a.nav-item {
  display: flex;
  width: 100%;
  height: 58px;
  padding: 4px 0;
  text-decoration: none;
  justify-content: center;

  &:hover > div {
    background: var(--BG_COLOR_4);
  }

  & > div {
    display: flex;
    width: auto;
    height: 100%;
    align-items: center;
    color: var(--TEXT_COLOR_0);
    padding: 12px;
    border-radius: 2rem;
    background: var(--BG_COLOR_0);
    transition: all 0.2s ease-in-out;

    & > span.icon {
      display: flex;
      width: 1.75rem;
      height: 1.75rem;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }

    & > span.item-text {
      display: none;
      align-content: center;
      width: auto;
      margin: 0 16px 0 20px;
      font-size: 20px;
    }
  }

  &.active > div {
    background: var(--BG_COLOR_4);
  }

  @media screen and (min-width: 1282px) {
    justify-content: flex-start;

    & > div > span.item-text {
      display: flex;
    }

    &.active {
      font-weight: bold;

      & > div {
        background: inherit;
      }
    }

    &:hover > div {
      background: var(--BG_COLOR_4);
    }
  }
}
</style>

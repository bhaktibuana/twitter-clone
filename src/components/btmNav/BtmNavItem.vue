<template>
  <router-link
    class="nav-item"
    :class="{ active: pageName === title }"
    :to="{ name: title, params: param ? { param } : null }"
  >
    <div>
      <font-awesome-icon :icon="'fa-solid ' + icon" size="1x" />
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
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: var(--BG_COLOR_0);
    color: var(--TEXT_COLOR_0);
    font-size: 1.5rem;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: var(--BG_COLOR_4);
    }
  }

  &.active > div {
    background: var(--BG_COLOR_4);
  }
}
</style>

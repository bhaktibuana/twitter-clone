<template>
  <div class="btm-nav">
    <div class="btm-nav-container">
      <div class="item-container">
        <BtmNavItem
          :pageName="pageName"
          :title="'Home'"
          :param="null"
          :icon="'fa-house'"
        />
      </div>

      <div class="item-container">
        <BtmNavItem
          :pageName="pageName"
          :title="'Search'"
          :param="'any'"
          :icon="'fa-magnifying-glass'"
        />
      </div>

      <div class="item-container">
        <BtmNavItem
          :pageName="pageName"
          :title="'Notification'"
          :param="null"
          :icon="'fa-bell'"
        />
      </div>

      <div class="item-container">
        <BtmNavItem
          :pageName="pageName"
          :title="'Profile'"
          :param="userName"
          :icon="'fa-user'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import BtmNavItem from "./BtmNavItem.vue";

export default {
  components: {
    BtmNavItem,
  },
  setup() {
    const store = useStore();
    const pageName = computed(() => store.state.pageName);
    const userName = computed(() => store.state.userName);

    return {
      pageName,
      userName,
    };
  },
};
</script>

<style lang="scss" scoped>
.btm-nav {
  display: flex;
  position: fixed;
  width: 100%;
  height: 53px;
  bottom: 0;
  left: 0;
  background-color: var(--BG_COLOR_0);
  border-top: 1px solid var(--BG_COLOR_4);
  z-index: 9;

  @media screen and (min-width: 500px) {
    display: none;
  }

  & > .btm-nav-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    & > .item-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<template>
  <SideNav />
  <router-view />
</template>

<script>
import SideNav from "./components/navigation/SideNav.vue";

export default {
  components: {
    SideNav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

*,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 15px;
}

:root {
  --PRIMARY_COLOR: rgb(29, 155, 240);
  --BG_COLOR_0: rgb(255, 255, 255);
  --BG_COLOR_1: rgb(247, 247, 247);
  --BG_COLOR_2: rgb(239, 243, 244);
  --BG_COLOR_3: rgb(239, 241, 241);
  --BG_COLOR_4: rgb(231, 231, 232);
  --BG_COLOR_5: rgb(232, 245, 253);
  --BG_COLOR_6: rgb(142, 205, 247);
  --BG_COLOR_7: rgb(26, 140, 216);
  --TEXT_COLOR_0: rgb(15, 20, 25);
  --TEXT_COLOR_1: rgb(83, 100, 113);
  --TEXT_COLOR_2: rgb(255, 255, 255);
  --TEXT_LINK_COLOR: rgb(29, 155, 240);
  --DARK_COLOR: rgb(15, 20, 25);
  --LIGHT_COLOR: rgb(255, 255, 255);

  --SIDE_NAV_WIDTH_0: 68px;
  --SIDE_NAV_WIDTH_1: 88px;
  --SIDE_NAV_WIDTH_2: 275px;
  --CONTENT_WIDTH_0: 600px;
  --CONTENT_WIDTH_1: 920px;
  --CONTENT_WIDTH_2: 990px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
  height: 3000px;
  min-height: 100vh;
  background: var(--LIGHT_COLOR);
}
</style>

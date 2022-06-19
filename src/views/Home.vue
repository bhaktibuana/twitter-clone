<template>
  <div class="home">
    <p>asdasd</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  display: flex;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: blue;

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
</style>

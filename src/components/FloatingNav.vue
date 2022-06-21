<template>
  <div class="floating-nav" @click="handleOpenModal">
    <div>
      <font-awesome-icon icon="fa-solid fa-feather-pointed" size="1x" />
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleOpenModal = () => {
      emit("setIsVisible", true);
    };

    return {
      handleOpenModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.floating-nav {
  display: flex;
  position: fixed;
  bottom: 73px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--PRIMARY_COLOR);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 9;

  @media screen and (min-width: 500px) {
    display: none;
  }

  & > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: var(--TEXT_COLOR_2);
    font-size: 1.5rem;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  &:active {
    background: var(--BG_COLOR_7);
  }
}
</style>

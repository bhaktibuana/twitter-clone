<template>
  <div class="suggest-item">
    <div class="image-container">
      <img :src="imageUrl" alt="profile" class="profile-image" />
    </div>

    <div class="info-container">
      <div class="profile">
        <p class="name">{{ name }}</p>
        <p class="username">@{{ username }}</p>
      </div>

      <div class="button-container">
        <button class="follow">Follow</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["name", "username", "image"],
  setup(props) {
    const imageUrl = computed(() => {
      return require(`../../assets/${props.image}`);
    });

    return {
      imageUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.suggest-item {
  display: flex;
  width: 100%;
  height: auto;
  padding: 12px 16px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--BG_COLOR_3);
  }

  & > .image-container {
    display: flex;
    width: 48px;
    height: 48px;
    margin: 0 12px 0 0;
    justify-content: center;
    align-items: center;

    & > img.profile-image {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  & > .info-container {
    display: flex;
    width: calc(100% - 48px - 12px);
    height: 48px;
    padding: 4px 0;
    justify-content: space-between;

    & > .profile {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > p.name {
        font-size: 1rem;
        color: var(--TEXT_COLOR_0);
        font-weight: bold;
        margin: 0;
      }

      & > p.username {
        font-size: 1rem;
        color: var(--TEXT_COLOR_1);
        margin: 0;
      }
    }

    & > .button-container {
      display: flex;
      height: 40px;
      width: auto;
      align-items: center;
      justify-content: center;

      & > button.follow {
        display: flex;
        width: 77px;
        height: 32px;
        margin: 0 0 0 12px;
        justify-content: center;
        align-items: center;
        background: var(--DARK_COLOR);
        color: var(--TEXT_COLOR_2);
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background: rgb(39, 44, 48);
        }
      }
    }
  }
}
</style>

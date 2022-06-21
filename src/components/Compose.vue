<template>
  <div class="compose">
    <div class="compose-container">
      <div class="left-content">
        <div class="profile-image">
          <img src="../assets/user.jpg" alt="user" />
        </div>
      </div>

      <div class="right-content">
        <div class="text-area-container">
          <textarea
            name="compose"
            placeholder="What's happening?"
            ref="compose"
            @keyup="handleTaKeyUp"
            @keydown="handleTaKeyUp"
            v-model="composeText"
          />
        </div>

        <div class="items-container">
          <div class="items">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-image" size="1x" />
            </div>

            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-face-smile" size="1x" />
            </div>

            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-location-dot" size="1x" />
            </div>
          </div>

          <div class="items">
            <div class="progress-container">
              <CircularProgress :textLength="textLength" />
            </div>

            <button class="button-tweet" :disabled="tweetBtnDisabled">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, computed } from "vue";
import CircularProgress from "../components/CircularProgress.vue";

export default {
  components: {
    CircularProgress,
  },
  setup() {
    const compose = ref(null);
    const tweetBtnDisabled = ref(true);
    const composeText = ref("");
    const textLength = computed(() => composeText.value.length);

    const handleComposeHeight = () => {
      compose.value.style.height = "30px";
      compose.value.style.height = `${compose.value.scrollHeight}px`;
    };

    const handleTaKeyUp = () => {
      if (textLength.value > 280) {
        tweetBtnDisabled.value = true;
        composeText.value = composeText.value.slice(0, 280);
      } else if (textLength.value > 0) {
        tweetBtnDisabled.value = false;
      } else {
        tweetBtnDisabled.value = true;
      }

      handleComposeHeight();
    };

    onUpdated(() => {
      handleComposeHeight();
    });

    onMounted(() => {
      handleComposeHeight();
    });

    return {
      compose,
      handleTaKeyUp,
      composeText,
      textLength,
      tweetBtnDisabled,
    };
  },
};
</script>

<style lang="scss" scoped>
.compose {
  display: flex;
  width: 100%;
  height: auto;
  padding: 4px 0 12px;
  border-bottom: 1px solid var(--BG_COLOR_2);

  & > .compose-container {
    display: flex;
    width: 100%;
    height: auto;
    padding: 0 16px;

    & > .left-content {
      display: flex;
      width: 48px;
      min-width: 48px;
      padding: 4px 0 0;
      margin: 0 12px 0 0;

      & > .profile-image {
        display: flex;
        width: 48px;
        height: 48px;
        justify-content: center;
        align-items: center;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 1 / 1;
          border-radius: 100%;
          cursor: pointer;
        }
      }
    }

    & > .right-content {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
      padding: 4px 0 0;

      & > .text-area-container {
        display: flex;
        width: 100%;
        height: auto;
        padding: 12px 0;

        & > textarea {
          width: 100%;
          height: auto;
          padding: 2px 0;
          resize: none;
          font-size: 20px;
          color: var(--TEXT_COLOR_0);
          overflow: hidden;
          outline: none;
          border: none;

          &::placeholder {
            color: var(--TEXT_COLOR_1);
          }
        }
      }

      & > .items-container {
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
        margin-left: 2px;
        border-top: 1px solid var(--BG_COLOR_2);

        & > .items {
          display: flex;
          width: auto;
          height: auto;
          margin-top: 12px;
          align-items: center;

          & > .icon-container {
            display: flex;
            width: 36px;
            height: 36px;
            justify-content: center;
            align-items: center;
            color: var(--PRIMARY_COLOR);
            font-size: 1.25rem;
            cursor: pointer;
          }

          & > .progress-container {
            display: flex;
            width: 36px;
            height: 36px;
            justify-content: center;
            align-items: center;
          }

          & > .button-tweet {
            display: flex;
            width: auto;
            height: 36px;
            padding: 0 16px;
            margin-left: 12px;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            color: var(--TEXT_COLOR_2);
            background: var(--PRIMARY_COLOR);
            transition: all 0.2s ease-in-out;
            border: none;
            outline: none;
            border-radius: 2rem;

            &:hover {
              background: var(--BG_COLOR_7);
            }

            &:disabled {
              cursor: default;
              background: var(--BG_COLOR_6);
            }
          }
        }
      }
    }
  }
}
</style>

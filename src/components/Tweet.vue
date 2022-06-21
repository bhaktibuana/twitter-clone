<template>
  <div class="tweet">
    <div class="tweet-container">
      <div class="tweet-profile-container">
        <div class="image-container">
          <img src="../assets/user.jpg" alt="profile" />
        </div>
      </div>

      <div class="tweet-content">
        <div class="tweet-title-container">
          <div class="tweet-title">
            <p class="name">{{ userData.name }}</p>
            <p class="username">· @{{ userData.username }}</p>
          </div>

          <div class="delete-icon">
            <font-awesome-icon icon="fa-solid fa-trash" size="1x" />
          </div>
        </div>

        <div class="tweet-info">
          <p v-if="calendar">{{ calendar }}, {{ time }} · {{ date }}</p>
          <p v-else>{{ time }} · {{ date }}</p>
        </div>

        <div class="tweet-text">
          <p>{{ tweetText }}</p>
        </div>

        <div class="tweet-tools">
          <div class="tools-container">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-comment" size="1x" />
            </div>

            <div class="icon-container retweet">
              <font-awesome-icon icon="fa-solid fa-retweet" size="1x" />
            </div>

            <div class="icon-container like">
              <font-awesome-icon icon="fa-solid fa-heart" size="1x" />
            </div>

            <div class="icon-container">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-from-bracket"
                size="1x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import * as moment from "moment";

export default {
  props: ["tweetId", "userId", "tweetDate", "tweetText"],
  setup(props) {
    const userData = ref([]);

    const date = computed(() => {
      return getFullDate(props.tweetDate);
    });

    const time = computed(() => {
      return getTime(props.tweetDate);
    });

    const calendar = computed(() => {
      return getCalendar(props.tweetDate);
    });

    const getUserById = async () => {
      try {
        const localData = await JSON.parse(localStorage.getItem("user"));

        if (localData) {
          userData.value = localData.filter(
            (user) => user.id === props.userId
          )[0];
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const dateConvert = (strDate) => {
      const date = new Date(strDate).getTime();
      return moment(date);
    };

    const getFullDate = (strDate) => {
      const date = new Date(strDate).getTime();
      return moment(date).format("MMM DD, YYYY");
    };

    const getTime = (strDate) => {
      const date = new Date(strDate).getTime();
      return moment(date).format("hh:mm a");
    };

    const getCalendar = (date) => {
      if (dateConvert(date) < moment().add(-2, "days")) {
        return false;
      } else if (dateConvert(date) < moment().add(-1, "days")) {
        return "Yesterday";
      } else {
        return "Today";
      }
    };

    onMounted(() => {
      getUserById();
    });

    return {
      date,
      time,
      calendar,
      userData,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet {
  display: flex;
  width: 100%;
  height: auto;
  border-bottom: 1px solid var(--BG_COLOR_2);
  cursor: pointer;
  background: var(--BG_COLOR_0);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--BG_COLOR_1);
  }

  & > .tweet-container {
    display: flex;
    width: 100%;
    height: auto;
    padding: 16px 12px 8px;

    & > .tweet-profile-container {
      display: flex;
      width: 48px;
      min-width: 48px;
      margin: 0 12px 0 0;

      & > .image-container {
        display: flex;
        width: 48px;
        height: 48px;
        border-radius: 50%;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }

    & > .tweet-content {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;

      & > .tweet-title-container {
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;

        & > .tweet-title {
          display: flex;
          width: auto;
          height: auto;

          & > p.name {
            font-size: 1rem;
            font-weight: bold;
            color: var(--TEXT_COLOR_0);
          }

          & > p.username {
            font-size: 1rem;
            color: var(--TEXT_COLOR_1);
            margin-left: 4px;
          }
        }

        & > .delete-icon {
          display: flex;
          width: auto;
          height: auto;
          margin-right: 8px;
          color: var(--TEXT_COLOR_1);
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            color: var(--DANGER_COLOR);
          }
        }
      }

      & > .tweet-info {
        display: flex;
        width: 100%;
        height: auto;
        margin: 4px 0;

        & > p {
          font-size: 1rem;
          color: var(--TEXT_COLOR_1);
          margin: 0;
        }
      }

      & > .tweet-text {
        display: flex;
        width: 100%;
        height: auto;
        margin: 2px 0;

        & > p {
          font-size: 1rem;
          color: var(--TEXT_COLOR_0);
          margin: 0;
        }
      }

      & > .tweet-tools {
        display: flex;
        width: 100%;
        height: auto;

        & > .tools-container {
          display: flex;
          width: 85%;
          height: auto;
          margin: 12px 0 0;
          justify-content: space-between;

          & > .icon-container {
            display: flex;
            width: 35px;
            height: 35px;
            align-items: center;
            justify-content: center;
            margin-top: -8px;
            background: transparent;
            cursor: pointer;
            border-radius: 50%;
            font-size: 1.1rem;
            color: var(--TEXT_COLOR_1);
            transition: all 0.2s ease-in-out;

            &:hover {
              background: rgba(29, 155, 240, 0.1);
              color: var(--PRIMARY_COLOR);
            }

            &:hover.retweet {
              background: rgba(0, 186, 124, 0.1);
              color: var(--SUCCESS_COLOR);
            }

            &:hover.like {
              background: rgba(244, 33, 46, 0.1);
              color: var(--DANGER_COLOR);
            }
          }
        }
      }
    }
  }
}
</style>

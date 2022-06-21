<template>
  <div class="profile">
    <div class="left-content-container">
      <TopNav :pageName="'Profile'" />

      <div class="page-content">
        <div class="profile-container">
          <div class="banner-container">
            <img :src="bannerUrl" alt="banner" class="banner" />
          </div>

          <div class="profile-container">
            <div class="profile-image">
              <div class="image-container">
                <img :src="imageUrl" alt="user" class="user" />
              </div>

              <button class="edit-profile">Edit profile</button>
            </div>

            <div class="profile-name">
              <p class="name">{{ userData.name }}</p>
              <p class="username">@{{ userData.username }}</p>
            </div>

            <div class="profile-bio">
              <p class="bio">{{ userData.bio }}</p>
            </div>

            <div class="profile-info">
              <div class="info-container">
                <div class="info-icon">
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    size="1x"
                  />
                </div>

                <p class="info-text">{{ userData.address }}</p>
              </div>

              <div class="info-container">
                <div class="info-icon">
                  <font-awesome-icon
                    icon="fa-solid fa-calendar-days"
                    size="1x"
                  />
                </div>

                <p class="info-text">Joined {{ joinedAt }}</p>
              </div>
            </div>

            <div class="profile-follows">
              <p class="follows-text">
                {{ userData.following }} <span>Following</span>
              </p>
              <p class="follows-text">
                {{ userData.followers }} <span>Followers</span>
              </p>
            </div>
          </div>
        </div>

        <div class="content">
          <h1>This page is under development</h1>
        </div>
      </div>
    </div>

    <div class="right-content-container">
      <div
        class="right-content"
        :style="{ top: `${topOffset}px` }"
        ref="rghtContent"
      >
        <Search />
        <Trends />
        <Suggest />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, computed } from "vue";
import { useStore } from "vuex";
import setPageName from "../utils/setPageName";
import Search from "../components/Search.vue";
import Trends from "../components/trends/Trends.vue";
import Suggest from "../components/suggest/Suggest.vue";
import Footer from "../components/Footer.vue";
import TopNav from "../components/TopNav.vue";
import * as moment from "moment";

export default {
  components: {
    Search,
    Trends,
    Suggest,
    Footer,
    TopNav,
  },
  setup() {
    const store = useStore();
    const { pageName, changePageName } = setPageName("Profile");
    const rghtContent = ref(null);
    const topOffset = ref(0);
    const userData = computed(() => store.state.userData);

    const bannerUrl = computed(() => {
      return require(`../assets/${userData.value.banner}`);
    });

    const imageUrl = computed(() => {
      return require(`../assets/${userData.value.image}`);
    });

    const countOffset = (elHeight) => {
      const result = window.innerHeight - elHeight;
      return Math.abs(result) * -1;
    };

    const toTimestamp = (strDate) => {
      return new Date(strDate).getTime();
    };

    const joinedAt = computed(() => {
      return moment(toTimestamp(userData.value.joined)).format("MMMM YYYY");
    });

    onUpdated(() => {
      topOffset.value = countOffset(rghtContent.value.clientHeight);
    });

    onMounted(() => {
      changePageName();
      topOffset.value = countOffset(rghtContent.value.clientHeight);
    });

    return {
      pageName,
      rghtContent,
      topOffset,
      userData,
      bannerUrl,
      imageUrl,
      joinedAt,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

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
    justify-content: space-between;
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

.left-content-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-left: 1px solid var(--BG_COLOR_2);
  border-right: 1px solid var(--BG_COLOR_2);

  @media screen and (min-width: 688px) {
    width: var(--LEFT_CONTENT_WIDTH);
  }

  & > .page-content {
    display: flex;
    width: 100%;
    height: auto;
    min-height: 100vh;
    flex-direction: column;

    & > .profile-container {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
      align-items: center;

      & > .banner-container {
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;

        & > img.banner {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      & > .profile-container {
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;
        padding: 12px 16px 0;
        margin-bottom: 16px;

        & > .profile-image {
          display: flex;
          width: 100%;
          height: auto;
          justify-content: space-between;

          & > .image-container {
            display: flex;
            width: 30%;
            min-width: 48px;
            height: auto;
            margin-top: -15%;
            margin-bottom: 12px;
            align-items: center;
            justify-content: center;
            background: var(--BG_COLOR_0);
            border-radius: 50%;
            padding: 3px;

            @media screen and (min-width: 500px) {
              width: 25%;
            }

            & > img.user {
              width: 100%;
              object-fit: cover;
              border-radius: 50%;
              aspect-ratio: 1 / 1;
            }
          }

          & > button.edit-profile {
            display: flex;
            height: 36px;
            justify-content: center;
            align-items: center;
            margin-bottom: 12px;
            padding: 0 16px;
            background: var(--BG_COLOR_0);
            border: 1px solid var(--BG_COLOR_4);
            border-radius: 2rem;
            font-size: 1rem;
            font-weight: bold;
            color: var(--TEXT_COLOR_0);
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
              background: var(--BG_COLOR_4);
            }
          }
        }

        & > .profile-name {
          display: flex;
          width: 100%;
          height: auto;
          flex-direction: column;
          margin: 4px 0 12px;

          & > p.name {
            font-size: 20px;
            color: var(--TEXT_COLOR_0);
            font-weight: bold;
          }

          & > p.username {
            font-size: 1rem;
            color: var(--TEXT_COLOR_1);
          }
        }

        & > .profile-bio {
          display: flex;
          width: 100%;
          height: auto;
          margin: 0 0 12px;

          & > p.bio {
            font-size: 1rem;
            color: var(--TEXT_COLOR_0);
          }
        }

        & > .profile-info {
          display: block;
          width: 100%;
          height: auto;
          margin: 0 0 12px;

          @media screen and (min-width: 425px) {
            display: flex;
          }

          & > .info-container {
            display: flex;
            width: auto;
            margin: 0 12px 0 0;

            & > .info-icon {
              display: flex;
              width: auto;
              max-width: 100%;
              height: 1.25rem;
              margin: 0 4px 0 0;
              font-size: 1rem;
              color: var(--TEXT_COLOR_1);
            }

            & > p.info-text {
              font-size: 1rem;
              color: var(--TEXT_COLOR_1);
              margin: 0;
            }
          }
        }

        & > .profile-follows {
          display: flex;
          width: 100%;
          height: auto;

          & > p.follows-text {
            font-size: 14px;
            color: var(--TEXT_COLOR_0);
            margin: 0 20px 0 0;
            font-weight: bold;

            & > span {
              color: var(--TEXT_COLOR_1);
              font-weight: normal;
            }
          }
        }
      }
    }

    & > .content {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-top: 1px solid var(--BG_COLOR_2);

      & > h1 {
        font-size: 18px;
        font-weight: bold;
        color: var(--TEXT_COLOR_1);
        text-align: center;
      }
    }
  }
}

.right-content-container {
  display: none;
  margin-inline-end: 10px;
  flex-direction: column;

  @media screen and (min-width: 1005px) {
    display: flex;
    width: var(--RIGHT_CONTENT_WIDTH_0);
  }

  @media screen and (min-width: 1095px) {
    width: var(--RIGHT_CONTENT_WIDTH_1);
  }

  & > .right-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0 0 64px 0;
    position: sticky;
    top: 0;
  }
}
</style>

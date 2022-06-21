<template>
  <div class="side-nav">
    <div class="nav-items">
      <div class="nav-title">
        <router-link class="nav-title-icon" :to="{ name: 'Home' }">
          <font-awesome-icon icon="fa-solid fa-egg" size="1x" />
        </router-link>
      </div>

      <div class="nav-item-container">
        <SideNavItem
          :pageName="pageName"
          :title="'Home'"
          :param="null"
          :icon="'fa-house'"
        />

        <SideNavItem
          :pageName="pageName"
          :title="'Search'"
          :param="'asd'"
          :icon="'fa-magnifying-glass'"
        />

        <SideNavItem
          :pageName="pageName"
          :title="'Notification'"
          :param="null"
          :icon="'fa-bell'"
        />

        <SideNavItem
          :pageName="pageName"
          :title="'Profile'"
          :param="userName"
          :icon="'fa-user'"
        />
      </div>

      <div class="tweet-button">
        <button @click="handleOpenModal">
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-feather-pointed" size="1x" />
          </span>
          <span class="text">Tweet</span>
        </button>
      </div>
    </div>

    <div class="nav-user">
      <router-link :to="{ name: 'Profile', params: { param: userName } }">
        <div class="user-container">
          <div class="image-container">
            <img :src="imageUrl" alt="user" v-if="!isLoading" />
          </div>

          <div class="user-info">
            <p class="name">{{ userData.name }}</p>
            <p class="username">@{{ userData.username }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted, onUpdated } from "vue";
import SideNavItem from "./SideNavItem.vue";
import getUserData from "../../utils/getUserData";

export default {
  components: {
    SideNavItem,
  },
  setup(props, { emit }) {
    const store = useStore();
    const pageName = computed(() => store.state.pageName);
    const userName = computed(() => store.state.userName);
    const imageUrl = ref("");
    const { userData, isLoading, fetchData } = getUserData(userName.value);

    const imageUrlParse = () => {
      imageUrl.value = require(`../../assets/${userData.value.image}`);
    };

    const handleOpenModal = () => {
      emit("setIsVisible", true);
    };

    onMounted(() => {
      fetchData();
    });

    onUpdated(() => {
      fetchData();
      imageUrlParse();
    });

    return {
      pageName,
      userName,
      userData,
      isLoading,
      imageUrl,
      handleOpenModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.side-nav {
  display: none;
  position: fixed;
  width: var(--SIDE_NAV_WIDTH_0);
  height: 100vh;
  margin: 0;
  padding: 0 4px;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (min-width: 500px) {
    display: flex;
  }

  @media screen and (min-width: 617px) {
    width: var(--SIDE_NAV_WIDTH_1);
    padding: 0 12px;
  }

  @media screen and (min-width: 705px) {
    margin-inline-start: calc(
      (100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_0))) / 2
    );
  }

  @media screen and (min-width: 1005px) {
    width: var(--SIDE_NAV_WIDTH_0);
    padding: 0 4px;
    margin-inline-start: calc(
      (100% - (var(--SIDE_NAV_WIDTH_0) + var(--CONTENT_WIDTH_1))) / 2
    );
  }

  @media screen and (min-width: 1025px) {
    width: var(--SIDE_NAV_WIDTH_1);
    padding: 0 12px;
    margin-inline-start: calc(
      (100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_1))) / 2
    );
  }

  @media screen and (min-width: 1095px) {
    margin-inline-start: calc(
      (100% - (var(--SIDE_NAV_WIDTH_1) + var(--CONTENT_WIDTH_2))) / 2
    );
  }

  @media screen and (min-width: 1282px) {
    width: var(--SIDE_NAV_WIDTH_2);
    margin-inline-start: calc(
      (100% - (var(--SIDE_NAV_WIDTH_2) + var(--CONTENT_WIDTH_2))) / 2
    );
  }
}

.nav-items {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1282px) {
    align-items: flex-start;
  }

  & > .nav-title {
    display: flex;
    width: 52px;
    height: 54px;
    padding: 2px 0;

    & > a.nav-title-icon {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: var(--PRIMARY_COLOR);
      font-size: 1.8rem;
      background: var(--BG_COLOR_0);
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--BG_COLOR_5);
      }
    }
  }

  & > .nav-item-container {
    display: flex;
    width: 100%;
    height: auto;
    margin: 2px 0 4px;
    flex-direction: column;
  }

  & > .tweet-button {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;

    @media screen and (min-width: 1282px) {
      justify-content: flex-start;
    }

    & > button {
      display: flex;
      width: 52px;
      height: 52px;
      margin: 16px 0;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 2rem;
      background: var(--PRIMARY_COLOR);
      color: var(--TEXT_COLOR_2);
      cursor: pointer;
      font-size: 17px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--BG_COLOR_7);
      }

      & > span.icon {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
      }

      & > span.text {
        font-size: 1em;
        font-weight: bold;
        display: none;
      }

      @media screen and (min-width: 1282px) {
        width: 225px;

        & > span.icon {
          display: none;
        }

        & > span.text {
          display: inline;
        }
      }
    }
  }
}

.nav-user {
  display: flex;
  width: 100%;
  height: 64px;
  margin: 12px 0;

  & > a {
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border-radius: 2rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--BG_COLOR_4);
    }

    & > .user-container {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 12px 8px;
      justify-content: center;

      @media screen and (min-width: 1282px) {
        padding: 12px;
        justify-content: flex-start;
      }

      & > .image-container {
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 2rem;

        & > img {
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          object-fit: cover;
        }
      }

      & > .user-info {
        display: none;
        width: auto;
        height: 100%;
        margin: 0 12px;
        justify-content: center;
        flex-direction: column;

        @media screen and (min-width: 1282px) {
          display: flex;
        }

        & > p.name {
          font-size: 1rem;
          font-weight: bold;
          color: var(--TEXT_COLOR_0);
        }

        & > p.username {
          font-size: 1rem;
          color: var(--TEXT_COLOR_1);
        }
      }
    }
  }
}
</style>

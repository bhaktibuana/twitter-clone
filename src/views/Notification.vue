<template>
  <div class="notification">
    Notification Page
  </div>
</template>

<script>
import { onMounted } from "vue";
import setPageName from "../utils/setPageName";

export default {
  setup() {
    const { pageName, changePageName } = setPageName("Notification");

    onMounted(() => {
      changePageName();
    });

    return {
      pageName,
    };
  },
};
</script>

<style>

</style>
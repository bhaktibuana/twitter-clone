<template>
  <div class="search">
    Search Page
  </div>
</template>

<script>
import { onMounted } from "vue";
import setPageName from "../utils/setPageName";

export default {
  setup() {
    const { pageName, changePageName } = setPageName("Search");

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
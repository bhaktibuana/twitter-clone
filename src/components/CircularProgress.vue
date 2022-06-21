<template>
  <div ref="progressBar" class="circular-progress">
    <div ref="progressValue" class="value-container"></div>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";

export default {
  props: ["textLength"],
  setup(props) {
    const progressBar = ref(null);
    const progressValue = ref(null);

    const maxValue = 280;

    const progress = (value) => {
      const length = value ? value : 0;
      const rest = maxValue - length;

      progressValue.value.textContent = rest <= 20 ? `${rest}` : "";
      progressValue.value.style.color = "var(--TEXT_COLOR_0)";
      progressBar.value.style.background = `conic-gradient(
        var(--PRIMARY_COLOR) ${length * (360 / maxValue)}deg,
        var(--BG_COLOR_2) ${length * (360 / maxValue)}deg
      )`;

      if (rest <= 0) {
        progressValue.value.style.color = "var(--DANGER_COLOR)";
        progressBar.value.style.width = "100%";
        progressBar.value.style.height = "100%";
        progressBar.value.style.background = `conic-gradient(
          var(--DANGER_COLOR) ${length * (360 / maxValue)}deg,
          var(--BG_COLOR_2) ${length * (360 / maxValue)}deg
        )`;
      } else if (rest <= 20) {
        progressBar.value.style.width = "100%";
        progressBar.value.style.height = "100%";
        progressBar.value.style.background = `conic-gradient(
          var(--WARING_COLOR) ${length * (360 / maxValue)}deg,
          var(--BG_COLOR_2) ${length * (360 / maxValue)}deg
        )`;
      }
    };

    onUpdated(() => {
      progress(props.textLength);
    });

    onMounted(() => {
      progress(props.textLength);
    });

    return {
      progressBar,
      progressValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.circular-progress {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - (100% / 3));
  height: calc(100% - (100% / 3));
  background: var(--PRIMARY_COLOR);
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 84%;
    height: 84%;
    background: var(--BG_COLOR_0);
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
}

.value-container {
  position: relative;
  color: var(--TEXT_COLOR_0);
  font-size: 13px;
  transition: all 0.2s ease-in-out;
}
</style>

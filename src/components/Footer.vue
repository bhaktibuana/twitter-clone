<template>
  <div class="footer">
    <div class="footer-link">
      <a href="/">Terms of Service</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Accessibility</a>
      <a href="/">More...</a>
    </div>

    <div class="footer-copyright">
      <p>
        © 2022 Egg, Designed by
        <a
          href="https://bhaktibuana-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          >Bhakti Buana</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;

  & > .footer-link {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-size: 13px;
      text-decoration: none;
      color: var(--TEXT_COLOR_1);
      margin: 0;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > .footer-copyright {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > p {
      font-size: 13px;
      color: var(--TEXT_COLOR_1);
      margin: 0;

      & > a {
        font-size: 13px;
        text-decoration: none;
        color: var(--TEXT_COLOR_1);
        margin: 0;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

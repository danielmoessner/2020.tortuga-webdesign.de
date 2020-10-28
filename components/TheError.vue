<template>
  <div class="error">
    <div class="error--contant">
      <h1 class="error--heading title">{{ code }} - {{ title }}</h1>
      <p class="error--message">{{ message }}</p>
      <a
        href="/"
        class="button is-dark is-rounded is-outlined error--button"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="600"
      >
        Zur Startseite
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheError",
  props: {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.error {
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  &--heading {
    margin-bottom: 12px !important;
  }
  &--message {
    margin-bottom: 2rem;
  }
}
</style>
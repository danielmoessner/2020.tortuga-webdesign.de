<template>
  <header class="reflection-header header small">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="animated fadeIn">
            <h1
              class="title is-2 has-text-dark"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {{ title }}
            </h1>
            <div
              class="subtitle is-4 has-text-dark"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="600"
            >
              {{ subtitle }}
            </div>
            <div class="buttons">
              <slot>
                <a
                  class="button is-dark is-rounded is-outlined"
                  v-if="buttonText"
                  :target="buttonTarget"
                  :href="buttonHref"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  :onclick="buttonOnclick"
                  >{{ buttonText }}</a
                >
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheSubpageHeader",
  props: {
    title: {
      required: true
    },
    subtitle: {
      required: true
    },
    buttonTarget: {
      required: false
    },
    buttonHref: {
      required: false,
      default: "#start"
    },
    buttonText: {
      required: false
    },
    buttonOnclick: {
      required: false
    }
  }
};
</script>
<style lang="scss">
header {
  background-image: url("../assets/images/low-poly-white.opt.jpg");
  background-size: cover;
  background-position: 50% 50%;
  padding: 14rem 0 10rem 0;
  overflow-x: hidden;

  h1 {
    line-height: 1.25;
    margin-bottom: 0.4em;
  }

  span {
    margin-top: 1.8em;
  }

  .buttons {
    margin-top: 3em;
  }

  &.small {
    padding: calc(5.2rem + 40px) 0 5.2rem 0;

    .buttons {
      margin-top: 0.8em;
    }
  }

  @include until($fullhd) {
    padding: 12rem 0 10rem 0;
  }

  @include until($widescreen) {
    padding: 8rem 0 10rem 0;
  }

  @include until($desktop) {
    padding: 8rem 0 4rem 0;
  }

  @include until($tablet) {
    padding: 7rem 0 4rem 0;
  }
}
</style>

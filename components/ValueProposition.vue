<template>
  <div class="column">
    <div
      class="mb-10"
      data-aos="fade-up"
      :data-aos-delay="aosDelay"
      data-aos-duration="600"
    >
      <span
        class="icon mb-10 is-large has-text-dark"
        :style="{ marginLeft: proposition.icon.margin + 'px' }"
        v-html="proposition.icon.svg"
      >
      </span>
      <h3 class="title mb-05 is-4">{{ proposition.title }}</h3>
      <p>{{ proposition.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ValueProposition",
  props: {
    proposition: {
      required: true
    },
    index: {
      required: true
    }
  },
  computed: {
    iconClass() {
      return (
        "fa-" + this.proposition.icon.name + " " + this.proposition.icon.type
      );
    },
    aosDelay() {
      return 300 + 100 * parseInt(this.index);
    }
  }
};
</script>
<style lang="scss">
.mb-10 {
  margin-bottom: 1rem !important;
}

.mb-05 {
  margin-bottom: 0.5rem !important;
}
</style>

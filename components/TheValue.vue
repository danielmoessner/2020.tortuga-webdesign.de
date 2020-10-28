<template>
  <div>
    <div class="columns">
      <div class="column is-5">
        <div class="mb-28" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600">
          <div class="tracking-wide uppercase mb-05"><small>{{ value.pretitle }}</small></div>
          <h2 class="is-3 title">{{ value.title }}</h2>
          <p class="subtitle">{{ value.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <ValueProposition v-for="(proposition, index) in value.propositions" :key="index" :proposition="proposition" :index="index" />
    </div>
  </div>
</template>
<script>
import ValueProposition from "../components/ValueProposition.vue";

export default {
  name: "TheValue",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // value: this.$store.state.pages.home.value
    }
  },
  components: {
    ValueProposition
  }
}

</script>
<style lang="scss">
.mb-28 {
  margin-bottom: 2.8rem;
}

.mb-05 {
  margin-bottom: 0.5rem;
}

.uppercase {
  text-transform: uppercase;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

</style>

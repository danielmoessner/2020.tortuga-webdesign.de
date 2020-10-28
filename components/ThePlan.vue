<template>
  <div>
    <div class="header has-text-centered mb-24">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <h2 class="title is-3" data-aos="fade-up">{{ plan.title }}</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="subtitle" data-aos="fade-up" data-aos-delay="50">
            {{ plan.subtitle }}
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <PlanStep
        v-for="(step, index) in plan.steps"
        :step="step.step"
        :key="index"
        :index="index"
      />
    </div>
    <br />
    <br />
    <br />
    <p class="has-text-centered" data-aos="fade-up" data-aos-delay="200">
      {{ plan.bottom }}
    </p>
  </div>
</template>
<script>
import PlanStep from "../components/PlanStep.vue";

export default {
  name: "ThePlan",
  components: {
    PlanStep
  },
  data() {
    return {
      plan: this.$store.state.pages.home.plan
    };
  }
};
</script>

<style>
.subtitle {
  margin-top: -1.25rem;
}
.mb-24 {
  margin-bottom: 2.4rem;
}
</style>

<template>
  <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h2 class="is-3 title has-text-centered">{{ stakes.title }}</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="subtitle has-text-centered">{{ stakes.subtitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheStakes",
  props: {
    stakes: {
      type: Object,
      required: true
    }
  }
}

</script>
<style scoped lang="scss">
.subtitle {
  margin-top: -1.25rem;
}

</style>

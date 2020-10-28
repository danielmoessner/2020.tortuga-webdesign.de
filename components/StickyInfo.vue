<template>
  <div class="sticky-info mb-26">
    <div data-aos="fade-up" data-aos-duration="600">
      <div class="tags">
        <span class="tag is-dark">{{ darkTag }}</span>
        <span v-for="(tag, index) in tags" :key="index" class="tag is-light">{{ tag }}</span>
      </div>
      <h2 class="is-3 title mb-04">{{ title }}</h2>
      <p class="mb-20">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "StickyInfo",
  props: {
    darkTag: {
      required: true
    },
    tags: {
      required: true
    },
    title: {
      required: true
    },
    description: {
      required: true
    }
  }
}

</script>
<style lang="scss">
.sticky-info {
  position: sticky;
  top: 100px;
}

.mb-04 {
  margin-bottom: 0.4rem !important;
}

.mb-20 {
  margin-bottom: 2rem !important;
}

.mb-26 {
  margin-bottom: 2.6rem !important;
}

</style>

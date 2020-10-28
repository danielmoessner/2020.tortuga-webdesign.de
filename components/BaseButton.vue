<template>
  <div>
    <nuxt-link class="button is-dark is-rounded is-outlined" :to="to">
      {{ text }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    to: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

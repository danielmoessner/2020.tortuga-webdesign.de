<template>
  <div class="flex flex-col pt-4">
    <slot></slot>
    <hr class="mb-0 mt-4 bg-gray-200" />
    <small class="uppercase tracking-wider">{{ text }}</small>
  </div>
</template>

<script>
export default {
  name: "StyleguideColumn",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

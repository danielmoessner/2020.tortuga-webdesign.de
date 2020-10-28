<template>
  <div>
    <h2 class="text-xl mt-24">{{ text }}</h2>
    <hr class="mt-2 mb-4 bg-gray-400" />
  </div>
</template>

<script>
export default {
  name: "StyleguideHeading",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

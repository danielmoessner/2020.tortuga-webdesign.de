<template>
  <div class="frame dark-shadow" :class="{ 'border-5': border, 'border-0': !border }">
    <div class="frame-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseFrame",
  props: {
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {}
  }
}

</script>
<style lang="scss">
.border-5 {
  border-width: 5px;
}

.border-0 {
  border-width: 0;
}

.frame {
  border-color: $dark;
  border-style: solid;
  border-radius: 6px;
  position: relative;
  display: block;
  overflow: hidden;
  background-color: $dark;

  &-content {
    border-radius: 3px;
    overflow: hidden;
    background: $dark;
  }

  img {
    display: block;
  }

}

</style>

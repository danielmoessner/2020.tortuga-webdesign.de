<template>
  <section class="section">
    <slot name="no-container"></slot>
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "BaseSection"
}

</script>
<style lang="scss">
.section {
  padding: 10rem 0;

  &.medium {
    padding: 6.66rem 0;
  }

  &.top-medium {
    padding-top: 6.66rem;
  }

  &.bottom-medium {
    padding-bottom: 6.66rem;
  }

  &.small {
    padding: 3.33rem 0;
  }

  &.top-small {
    padding-top: 3.33rem;
  }

  &.bottom-small {
    padding-bottom: 3.33rem;
  }

  @include until($desktop) {
    padding: 6rem 0;

    &.medium {
      padding: 4rem 0;
    }

    &.top-medium {
      padding-top: 4rem;
    }

    &.bottom-medium {
      padding-bottom: 4rem;
    }

    &.small {
      padding: 2rem 0;
    }

    &.top-small {
      padding-top: 2rem;
    }

    &.bottom-small {
      padding-bottom: 2rem;
    }

    .container {
      padding: 0 .8rem;
    }
  }
}

</style>

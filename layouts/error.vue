<template>
  <div>
    <TheError
      code="404"
      title="Seite nicht gefunden"
      message="Leider ist die gewünschte Seite nicht verfügbar."
    />
  </div>
</template>

<script>
import TheError from "@/components/TheError";

export default {
  layout: "empty",
  components: {
    TheError,
  },
  head() {
    script: [];
  },
};
</script>

<style lang="scss">
// automatically imports the main style sheet
</style>

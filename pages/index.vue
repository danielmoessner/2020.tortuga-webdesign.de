<template>
  <main>
    <!---->
    <TheHeader />
    <!---->
    <base-section class="bottom-medium top-medium" id="infos">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <TheStakes :stakes="page.stakes" />
    </base-section>
    <!---->
    <base-section class="top-small" id="value">
      <TheValue :value="page.value" />
    </base-section>
    <!---->
    <base-section id="guide">
      <TheGuide />
    </base-section>
    <!---->
    <base-section>
      <ThePlan />
    </base-section>
    <!---->
    <base-section>
      <TheLeadGenerator :leadGenerator="page.leadGenerator" />
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue";
import TheGuide from "@/components/TheGuide.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheLeadGenerator from "@/components/TheLeadGenerator.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheStakes from "@/components/TheStakes.vue";
import TheValue from "@/components/TheValue.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    BaseSection,
    TheGuide,
    TheHeader,
    TheHeaderReflection,
    TheLeadGenerator,
    ThePlan,
    TheStakes,
    TheValue,
    TheFooter,
  },
  data() {
    return {
      page: this.$store.state.pages.home
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: true }
      ],
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
}

</script>

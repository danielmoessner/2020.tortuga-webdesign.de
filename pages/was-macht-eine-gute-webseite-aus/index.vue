<template>
  <main>
    <!---->
    <the-subpage-header :title="page.header.title" :subtitle="page.header.subtitle">
      <div></div>
    </the-subpage-header>
    <!---->
    <base-section class="bottom-medium top-medium" id="infos">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <TheStakes :stakes="page.stakes" />
    </base-section>
    <!---->
    <base-section class="top-small">
      <div class="columns">
        <ValueProposition v-for="(proposition, index) in page.valuePropositions" :key="index" :proposition="proposition" :index="index" />
      </div>
    </base-section>
    <!---->
    <base-section>
      <base-frame>
        <div class="has-background-warning p-30 md:p-50">
          <div class="columns">
            <div class="column is-3">
              <h2 class="title is-3 mb-18">{{ page.download.title }}</h2>
              <div class="is-flex mw-400 h-auto">
                <div class="paper-shadow svg-parent w-100">
                  <LeadGenerator />
                </div>
              </div>
            </div>
            <div class="column is-8 is-offset-1">
              <LeadGeneratorForm :download="page.download" />
            </div>
          </div>
        </div>
      </base-frame>
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue"
import BaseSection from "@/components/BaseSection.vue"
import LeadGenerator from "@/assets/images/leadgenerator.production.svg?inline";
import LeadGeneratorForm from "@/components/LeadGeneratorForm.vue"
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheStakes from "@/components/TheStakes.vue"
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import ValueProposition from "@/components/ValueProposition.vue";

export default {

  components: {
    BaseFrame,
    BaseSection,
    LeadGenerator,
    LeadGeneratorForm,
    TheFooter,
    TheHeaderReflection,
    TheStakes,
    TheSubpageHeader,
    ValueProposition,
  },
  data() {
    return {
      page: this.$store.state.pages.leadGenerator
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
}

</script>
<style lang="scss">
.svg-parent {
  padding-bottom: 126%;
  position: relative;
  &>svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

</style>

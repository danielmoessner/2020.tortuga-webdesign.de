<template>
  <main>
    <!---->
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!---->
    <base-section class="top-medium" id="referenzen">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div id="start" class="container">
        <div class="portfolio" v-for="year in portfolioPostsByYearSortedKeys" :key="year">
          <div class="portfolio--year">{{ year }}</div>
          <div class="portfolio--grid">
            <div v-for="(item, index) in portfolioPostsByYear[year]" :key="index" class="portfolio--item">
              <PortfolioShowcase :portfolioItem="item" />
            </div>
          </div>
        </div>
      </div>
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue"
import CtaButton from "@/components/CtaButton.vue";
import PortfolioShowcase from "@/components/PortfolioShowcase.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";

export default {
  components: {
    BaseSection,
    CtaButton,
    PortfolioShowcase,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader,
  },
  data() {
    return {
      page: this.$store.state.pages.portfolio,
      portfolioPosts: this.$store.state.portfolioPosts,
      buttonText: "Jetzt ansehen",
      year: ""
    }
  },
  computed: {
    portfolioPostsByYear() {
      const postsByYear = {}
      this.portfolioPosts.forEach((item) => {
        const year = new Date(item.date).getFullYear()
        year in postsByYear ? postsByYear[year].push(item) : postsByYear[year] = [item]
      })
      return postsByYear
    },
    portfolioPostsByYearSortedKeys() {
      return Object.keys(this.portfolioPostsByYear).sort().reverse()
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}

</script>
<style lang="scss">
.portfolio {
  margin-bottom: 8rem;
  &--grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 8rem;
    gap: 8rem;

    @include from($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include from($desktop) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &--year {
    font-weight: 600;
    font-size: 2.6rem;
  }

}

</style>

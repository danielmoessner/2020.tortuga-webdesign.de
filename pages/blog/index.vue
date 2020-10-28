<template>
  <main>
    <!---->
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!---->
    <base-section class="top-medium" id="artikel">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div id="start" class="container">
        <div class="columns is-multiline">
          <div class="column is-4" v-for="article in blogPosts" :key="article.slug">
            <ArticleCard :article="article" />
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
import ArticleCard from "@/components/ArticleCard.vue";
import BaseSection from "@/components/BaseSection.vue"
import CtaButton from "@/components/CtaButton.vue";
import PortfolioShowcase from "@/components/PortfolioShowcase.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";

export default {
  components: {
    ArticleCard,
    BaseSection,
    CtaButton,
    PortfolioShowcase,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader,
  },
  data() {
    return {
      page: this.$store.state.pages.blog,
      blogPosts: this.$store.state.blogPosts,
      buttonText: "Jetzt umschauen"
    }
  },
  computed: {

  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
  mounted() {}
}

</script>

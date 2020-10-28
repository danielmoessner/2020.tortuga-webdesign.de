<template>
  <main>
    <!---->
    <TheSubpageHeader class="no-print" :title="article.title" :subtitle="subtitle" :buttonText="buttonText" :buttonOnclick="buttonOnclick" />
    <!---->
    <base-section class="top-medium">
      <template v-slot:no-container>
        <TheHeaderReflection class="no-print" />
      </template>
      <div class="columns is-multiline">
        <div class="column is-3 no-print">
          <sticky-info :darkTag="articleDate" :tags="article.tags" :title="article.title" :description="article.description">
            <button class="button is-dark is-rounded is-outlined" onclick="window.print();return false;">Jetzt drucken</button>
          </sticky-info>
        </div>
        <div class="column is-9">
          <base-frame class="print-area">
              <img :src="article.image" alt="Artikelbild">
              <article v-html="$md.render(article.body)" class="px-20 py-10 content has-background-white">
              </article>
          </base-frame>
        </div>
        <div class="column is-12 no-print">
          <nuxt-link to="/blog" class="button is-dark is-rounded is-outlined" data-aos="fade-up" data-aos-duration="600">Zurück zu allen Artikeln</nuxt-link>
        </div>
      </div>
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue"
import BaseSection from "@/components/BaseSection.vue"
import StickyInfo from "@/components/StickyInfo.vue"
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";

export default {
  components: {
    BaseFrame,
    BaseSection,
    StickyInfo,
    TheHeaderReflection,
    TheSubpageHeader,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      buttonText: "Jetzt drucken",
      buttonOnclick: "window.print();return false;",
      subtitle: "Artikel",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    article() { 
      return this.$store.state.blogPosts.filter(item => item.slug === this.slug)[0]
    },
    articleDate() {
      const date = new Date(this.article.date)
      return date.getDate() + ". " + this.months[date.getMonth()] + " " + date.getFullYear()
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: "description", name: "description", content: this.article.description }
      ]
    }
  }
}

</script>
<style lang="scss">
.px-20 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-10 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media print {
  .the-navigation.navbar {
    top: 0 !important;
    visibility: visible !important;
    position: absolute !important;
    transform: none !important;
  }
  
  .navbar-brand {
    margin-left: -0.7rem;
  }

  .print-area {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 9999 !important;
    background-color: #ffffff !important;
    box-shadow: none !important;
  }

  .no-print {
    display: none !important;
  }
}

</style>

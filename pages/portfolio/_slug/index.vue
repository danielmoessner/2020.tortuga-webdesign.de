<template>
  <main>
    <!---->
    <TheSubpageHeader :title="item.title" :subtitle="subtitle" :buttonText="buttonText" :buttonTarget="buttonTarget" :buttonHref="buttonHref" />
    <!---->
    <base-section class="top-medium">
      <template v-slot:no-container>
        <TheHeaderReflection class="no-print" />
      </template>
      <div class="columns is-multiline">
        <div class="column is-3">
          <sticky-info :darkTag="itemDate" :tags="item.tags" :title="itemUrlClean" :description="item.description">
            <a :href="item.url" target="_blank" class="button is-dark is-rounded is-outlined">Die Webseite besuchen</a>
          </sticky-info>
        </div>
        <div class="column is-9">
          <base-frame>
            <img :src="item.image" :alt="item.title">
          </base-frame>
        </div>
        <div class="column is-12">
          <nuxt-link to="/portfolio" class="button is-dark is-rounded is-outlined" data-aos="fade-up" data-aos-duration="600">Zurück zu allen Referenzen</nuxt-link>
        </div>
      </div>
      </base-section>
      <!---->
  </main>
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue"
import BaseSection from "@/components/BaseSection.vue"
import StickyInfo from "@/components/StickyInfo.vue";
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
      buttonText: "Die Webseite besuchen",
      buttonTarget: "_blank",
      subtitle: "Referenz",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    item() {
      return this.$store.state.portfolioPosts.filter(item => item.slug === this.slug)[0]
    },
    buttonHref() {
      return this.item.url
    },
    itemDate() {
      const date = new Date(this.item.date)
      return this.months[date.getMonth()] + " " + date.getFullYear()
    },
    itemUrlClean() {
      let url = this.item.url
      return url.replace('https://', '').replace('http://', '')
    }
  },
  head() {
    return {
      title: this.item.title,
      meta: [
        { hid: "description", name: "description", content: this.item.description }
      ]
    }
  }
}

</script>

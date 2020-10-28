<template>
  <main>
    <!---->
    <TheSubpageHeader
      :title="page.thankYou.header.title"
      :subtitle="page.thankYou.header.subtitle"
    />
    <!---->
    <base-section class="top-medium" id="kontakt">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div class="message is-success">
        <div class="message-body">
          <h3 class="title is-4 color-inherit">
            {{ page.thankYou.text.title }}
          </h3>
          <p class="mb-02">
            {{ page.thankYou.text.text }}
          </p>
          <p class="">
            <nuxt-link class="" :to="page.thankYou.text.link.to">
              {{ page.thankYou.text.link.text }}
            </nuxt-link>
          </p>
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
import BaseSection from "@/components/BaseSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseSection,
    BaseButton,
    ContactForm,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader
  },
  data() {
    return {
      page: this.$store.state.pages.contact
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  }
};
</script>

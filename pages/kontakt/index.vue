<template>
  <main>
    <!---->
    <TheSubpageHeader
      :title="page.header.title"
      :subtitle="page.header.subtitle"
      :buttonText="buttonText"
    />
    <!---->
    <base-section class="top-medium" id="kontakt">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div id="start" class="container">
        <div class="columns is-gapless">
          <div class="column is-4">
            <div class="info-box has-background-dark p-20">
              <div class="content">
                <h2 class="title is-3 has-text-white">Hier finden Sie uns:</h2>
                <address class="info-box--address has-text-white">
                  <b>Tortuga Webdesign</b> <br />
                  Daniel Mössner <br />
                  Albert-Schweitzer-Str. 17b <br />
                  85375 Neufahrn b. Freising
                </address>
                <h2 class="title is-3 has-text-white">Kontaktdaten:</h2>
                <p class="has-text-white">
                  <a
                    class="info-box--link"
                    href="mailto:kontakt@tortuga-webdesign.de"
                    >kontakt@tortuga-webdesign.de</a
                  ><br />
                  <a class="info-box--link" href="tel:004917638385646"
                    >0176 38385646</a
                  >
                </p>
                <br />
                <div class="icons-box">
                  <a
                    class="icon-link"
                    href="https://www.instagram.com/tortugawebdesign/"
                    target="_blank"
                  >
                    <div class="fa-2x fa-layers">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-instagram fa-w-14"
                        style="transform-origin: 0.4375em 0.5em;"
                      >
                        <g transform="translate(224 256)" class="">
                          <g
                            transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)"
                            class=""
                          >
                            <path
                              fill="currentColor"
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                              transform="translate(-224 -256)"
                              class=""
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="icon-link"
                    href="https://www.linkedin.com/in/danielmoessner/"
                    target="_blank"
                  >
                    <div class="fa-2x fa-layers">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-linkedin-in fa-w-14"
                        style="transform-origin: 0.4375em 0.5em;"
                      >
                        <g transform="translate(224 256)" class="">
                          <g
                            transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)"
                            class=""
                          >
                            <path
                              fill="currentColor"
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                              transform="translate(-224 -256)"
                              class=""
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-8">
            <div class="has-background-white-ter p-20">
              <h2 class="title is-3 mb-20">Kontaktaufnahme</h2>
              <ContactForm />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191"
              frameborder="0"
              style="border:0; width: 100%; height: 450px;"
              allowfullscreen=""
            ></iframe>
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
import BaseSection from "@/components/BaseSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";

export default {
  components: {
    BaseSection,
    ContactForm,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader,
  },
  data() {
    return {
      page: this.$store.state.pages.contact,
      buttonText: "Jetzt loslegen"
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
<style lang="scss">
#kontakt {
  .columns:nth-child(1) {
    flex-direction: row-reverse;
  }
}

.mb-20 {
  margin-bottom: 2rem !important;
}

.p-20 {
  padding: 2rem !important;
}

.icons-box {
  max-height: 42px;
  overflow: hidden;
}

.icon-link {
  color: $dark;

  &:hover {
    color: $grey-dark;
  }
}

.info-box {
  display: flex;
  padding: 2rem;
  font-size: 1.2rem;
  position: sticky;
  top: 80px;

  &--address {
    font-style: normal;
  }

  &--link {
    color: $light;

    &:hover {
      color: $grey-lighter;
    }
  }
}
</style>

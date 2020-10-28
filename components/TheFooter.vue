<template>
  <footer class="mt-12vh">
    <div class="columns">
      <div class="column is-two-fifths">
        <img src="@/assets/images/logo.production.svg" alt="Tortuga Webdesign" class="max-h-50 mb-10">
        <div class="is-size-6">
          Viele Personen oder Unternehmen werden online nachteilig repräsentiert. Wir von Tortuga Webdesign liefern klar strukturierte & attraktive Webseiten, sodass Sie online modern dargestellt und von Webseitenbesuchern geliebt werden.
        </div>
      </div>
      <div class="column">
        <div>
          <h3 class="mb-05">Navigation</h3>
          <ul class="footer-ul">
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none is-block has-text-primary" to="/">Startseite</nuxt-link>
            </li>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none is-block has-text-primary" to="/ueber-uns">Über uns</nuxt-link>
            </li>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none is-block has-text-primary" to="/portfolio">Referenzen</nuxt-link>
            </li>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none is-block has-text-primary" to="/blog">Artikel</nuxt-link>
            </li>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none is-block has-text-primary" to="/kontakt">Kontakt</nuxt-link>
            </li>
            <!-- <li class="mb-02">
              <ul class="py-03 md:py-none">
                <li><h4>Leistungen (demnächst aktiv)</h4></li>
                <li class="ml-10"><span>Webdesign</span></li>
                <li class="ml-10"><span>Google Ads</span></li>
                <li class="ml-10"><span>Beratung</span></li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="column">
        <div>
          <h3 class="mb-05">Kontakt</h3>
          <address class="py-03 md:py-none">
            Daniel Mössner <br>
            <a class=" has-text-primary" href="tel:004917638385646">0176 3838 5646</a> <br>
            <a class=" has-text-primary" href="mailto:kontakt@tortuga-webdesign.de">kontakt@tortuga-webdesign.de</a> <br>
            Albert-Schweitzer-Str. 17b <br>
            85375 Neufahrn b. Freising
          </address>
        </div>
      </div>
      <div class="column">
        <div class="text-right">
          <h3 class="mb-05">Rechtliches</h3>
          <ul>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none mb-02 is-block has-text-primary" to="/impressum">Impressum</nuxt-link>
            </li>
            <li class="mb-02">
              <nuxt-link class="py-03 md:py-none mb-02 is-block has-text-primary" to="/datenschutz">Datenschutz</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "TheFooter"
}

</script>
<style lang="scss">
.py-03 {
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
}

.md\:py-none {
  @include from($tablet) {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
}

.mb-02 {
  margin-bottom: 0.2rem;
}

.ml-10 {
  margin-left: 1rem;
}

.mb-10 {
  margin-bottom: 1rem;
}

.mt-12vh {
  margin-top: 12vh;
}

.mb-05 {
  margin-bottom: 0.5rem;
}

.text-right {
  text-align: right;
}

.max-h-50 {
  max-height: 5rem;
}

</style>

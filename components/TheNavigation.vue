<template>
  <nav ref="navigation" class="the-navigation navbar is-fixed-top" :class="navigationClassList">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="../assets/images/logo.production.svg" alt="Tortuga Webdesign Logo">
        </nuxt-link>
        <a class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <nuxt-link @click.native="showNav = false" class="navbar-item" to="/">
            Startseite
          </nuxt-link>
          <nuxt-link @click.native="showNav = false" class="navbar-item" to="/ueber-uns">
            Über uns
          </nuxt-link>
          <nuxt-link @click.native="showNav = false" class="navbar-item" to="/portfolio">
            Referenzen
          </nuxt-link>
          <nuxt-link @click.native="showNav = false" class="navbar-item" to="/blog">
            Artikel
          </nuxt-link>
          <nuxt-link @click.native="showNav = false" class="navbar-item" to="/kontakt">
            Kontakt
          </nuxt-link>
          <div class="navbar-item is-hidden-touch">
            <CtaButton @click.native="showNav = false" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";

export default {
  components: {
    CtaButton
  },
  name: "TheNavigation",
  data() {
    return {
      showNav: false,
      scrollTop: 0,
      isTop: true,
      isInvisible: false,
      isOut: false
    }
  },
  watch: {
    scrollTop: function(newValue, oldValue) {
      if (newValue <= 1) {
        this.isTop = true
        this.isInvisible = false
        this.isOut = false
      } else if (newValue > oldValue) {
        this.isOut = true
      } else {
        this.isInvisible = false
        this.isOut = false
      }
      
      if (newValue > 200 && this.isTop) {
        this.isInvisible = true
        this.isTop = false
      }
    }
  },
  computed: {
    navigationClassList() {
      return {
        'is-top': this.isTop,
        'is-out': this.isOut,
        'is-invisible': this.isInvisible,
      }
    }
  },
  mounted() {
    const self = this
    document.addEventListener('scroll', function() {
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop
    })
  }
}

</script>
<style lang="scss">
.the-navigation.navbar {
  width: 100%;
  transition: transform 0.6s, background-color 0.6s, opacity 0s;
  background-color: $white;

  a.navbar-item:hover {
    background: hsl(278, 20%, 92%);
    color: initial;
  }

  a.navbar-item:focus {
    background: transparent;
    color: initial;
  }

  a.navbar-item.nuxt-link-exact-active {
    color: #000;
  }

  .navbar-brand .navbar-item img {
    max-height: 3rem;

    @include until($tablet) {
      max-height: 2.4rem;
    }
  }

  &.is-out {
    transform: translateY(-61px);
  }

  &.is-top {
    position: absolute;
    background-color: transparent;
  }
}

</style>

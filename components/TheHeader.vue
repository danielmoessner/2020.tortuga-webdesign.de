<template>
  <header id="header" class="header reflection-header">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6-desktop is-12-tablet">
          <div class="">
            <h1 class="title is-2 has-text-dark" data-aos="fade-up" data-aos-duration="600">
              {{ header.title }}
            </h1>
            <div class="subtitle is-4 has-text-dark" data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">
              {{ header.subtitle }}
            </div>
            <div class="buttons">
              <!-- <a class="button is-primary is-rounded" href="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">Jetzt zusammenarbeiten</a> -->
              <CtaButton id="header-cta-button" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" />
              <a href="#infos" class="button is-dark is-rounded is-outlined" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
        <div class="column is-6-desktop is-12-tablet is-hidden">
          <div id="laptop">
            <!-- <img src="../assets/images/laptop.png" alt="Laptop"> -->
          </div>
          <div id="iphone-1">
            <!-- <img src="../assets/images/iphone-back.png" alt="iPhone"> -->
          </div>
          <div id="iphone-2">
            <!-- <img src="../assets/images/iphone.png" alt="iPhone"> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";

export default {
  name: "TheHeader",
  components: {
    CtaButton
  },
  data() {
    return {
      header: this.$store.state.pages.home.header
    }
  },
}

</script>
<style lang="scss">
#header-cta-button {
  margin-right: .25rem;
}

header {
  background-image: url('../assets/images/low-poly-white.opt.jpg');
  background-size: cover;
  background-position: 50% 50%;
  padding: 14rem 0 10rem 0;

  h1 {
    line-height: 1.25;
    margin-bottom: 0.4em;
  }
  
  span {
    margin-top: 1.8em;
  }

  .buttons {
    margin-top: 3em;
  }

  &.small {
    padding: calc(5.2rem + 40px) 0 5.2rem 0;

    .buttons {
      margin-top: 0.8em;
    }
  }

  @include until($fullhd) {
    padding: 12rem 0 10rem 0;
  }

  @include until($widescreen) {
    padding: 8rem 0 10rem 0;
  }

  @include until($desktop) {
    padding: 8rem 0 4rem 0;
    .container {
      padding: 0 .8rem;
    }
  }

  @include until($tablet) {
    padding: 7rem 0 4rem 0;
    .title.is-2{
      font-size: 2.4rem;
    }
  }

  overflow-x: hidden;

  #laptop {
    max-width: 850px;
    top: -100px;
    right: -110px;
    position: absolute;
  }

  #iphone-1 {
    position: absolute;
    max-width: 170px;
    right: 50px;
    top: -10px;
  }

  #iphone-2 {
    position: absolute;
    max-width: 210px;
    right: 140px;
    top: -30px;
  }

  @include until($fullhd) {
    #laptop {
      max-width: 800px;
      top: -50px;
    }

    #iphone-1 {
      max-width: 165px;
      top: 30px;
    }

    #iphone-2 {
      max-width: 200px;
      top: 10px;
    }
  }

  @include until($widescreen) {
    #laptop {
      max-width: 700px;
      top: 0;
    }

    #iphone-1 {
      max-width: 150px;
      top: 60px;
      right: 50px;
    }

    #iphone-2 {
      max-width: 180px;
      top: 40px;
      right: 90px;
    }
  }

  @include until($desktop) {
    .column:nth-child(2) {
      height: 320px;
    }

    #laptop {
      max-width: 600px;
      top: 210px;
      right: -50px;
    }

    #iphone-1 {
      max-width: 160px;
      top: 220px;
    }

    #iphone-2 {
      top: 210px;
    }
  }

  @include until($tablet) {
    .column:nth-child(2) {
      height: 320px;
    }

    #laptop {
      top: auto;
      bottom: 0;
    }

    #iphone-1 {
      top: auto;
      bottom: 10px;
    }

    #iphone-2 {
      top: auto;
      bottom: 10px;
    }
  }
}

</style>

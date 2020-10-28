<template>
  <base-frame>
  <div ref="showcase" class="showcase" @mousemove="mousemove" @mouseover="mouseover" @mouseleave="mouseleave">
    <nuxt-link :to="detailPage" @click="mouseleave">
      <div class="tags">
        <span class="tag is-dark">{{ portfolioItem.title }}</span><br>
        <span class="tag is-light">{{ month }}</span>
        <span v-for="(tag, index) in portfolioItem.tags" :key="index" class="tag is-light">{{ tag }}</span>
      </div>
      <img class="showcase--height-set" ref="showcaseHeightSet" :src="portfolioItem.shortImage" :alt="portfolioItem.title">
      <div class="showcase--scroll">
        <div class="showcase--img" ref="showcaseImage" style="will-change: transform;" :style="{ transform: showcaseImageTransform }">
          <img :data-src="portfolioItem.image500" :alt="portfolioItem.title" class="lazyload">
        </div>
      </div>
    </nuxt-link>
  </div>
</base-frame>
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue";

export default {
  components: {
    BaseFrame
  },
  props: {
    portfolioItem: {
      required: true
    }
  },
  data() {
    return {
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      mousePositionY: 0.5,
      showcaseLookedAt: false,
      showcaseInterval: "",
      showcaseScrollY: 0
    }
  },
  computed: {
    showcaseImageTransform() {
      return "translateY(" + this.showcaseScrollY + "px)"
    },
    detailPage() {
      return "/portfolio/" + this.portfolioItem.slug
    },
    showcase() {
      return this.$refs.showcase
    },
    showcaseImage() {
      return this.$refs.showcaseImage
    },
    showcaseHeightSet() {
      return this.$refs.showcaseHeightSet
    },
    showcaseImageRoute() {
      return Math.min(this.showcaseHeightSet.getBoundingClientRect().height - this.showcaseImage.getBoundingClientRect().height + 0.3, 0)
    },
    month() {
      const date = new Date(this.portfolioItem.date)
      return this.months[date.getMonth()] + " " + date.getFullYear()
    },
    speed() {
      if (this.mousePositionY >= 0.45 && this.mousePositionY <= 0.55) {
        return 0
      } else {
        return -10 * (this.mousePositionY - 0.5)
      }
    },
  },
  watch: {
    showcaseLookedAt: function(newValue, oldValue) {
      if (newValue === true) {
        if (this.showcaseInterval === "") this.showcaseInterval = setInterval(this.moveImage, 16)
      } else {
        clearInterval(this.showcaseInterval)
        this.showcaseInterval = ""
      }
    }
  },
  methods: {
    updateMousePosition(event) {
      const rect = this.showcase.getBoundingClientRect()
      const y = event.clientY - rect.top
      const yProportion = y / rect.height
      this.mousePositionY = yProportion
    },
    mousemove(event) {
      this.updateMousePosition(event)
    },
    mouseover(event) {
      this.showcaseLookedAt = true
    },
    mouseleave(event) {
      this.showcaseLookedAt = false
    },
    moveImage() {
      const newPosition = this.showcaseScrollY + this.speed
      if (newPosition > 0) {
        this.showcaseScrollY = 0
      } else if (newPosition <= this.showcaseImageRoute) {
        this.showcaseScrollY = this.showcaseImageRoute
      } else {
        this.showcaseScrollY = newPosition
      }
    }
  }
}

</script>
<style lang="scss">
.showcase {
  position: relative;
  display: block;
  overflow: hidden;
  box-sizing: content-box;

  &>img {
    display: block;
  }

  .tags {
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 5;
  }

  &:hover {
    box-shadow: 0 0 2.8rem 0 rgba($color4, 1);

    .tags {
      display: block;
    }
  }

  &--height-set {
    display: block;
    // opacity: 0;
    width: 100%;

    img {
      display: block;
    }
  }

  &--scroll {
    position: absolute;
    width: 100%;
    top: 0;
  }

  &--img {
    transform: translateY(0);
    display: block;

    img {
      display: block;
    }
  }

  @include until($tablet) {
    .tags {
      display: block;
    }
  }
}

</style>

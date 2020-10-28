<template>
  <div class="article card is-hoverable border-radius-6 overflow-hidden">
    <nuxt-link :to="articleLink" class="article--hover">
      <div class="card-image">
        <figure class="is-5by3 image">
          <img :src="article.image" alt="Artikel Hauptbild">
        </figure>
      </div>
    </nuxt-link>
    <div class="article--bottom card-content">
      <div class="mb-18">
        <nuxt-link :to="articleLink" class="has-text-black-ter">
          <h2 class="title is-3 mb-10">{{ article.title }}</h2>
        </nuxt-link>
        <nuxt-link :to="articleLink" class="has-text-black-ter">
          {{ article.description }}
        </nuxt-link>
        <span v-for="(tag, index) in article.tags" :key="index">#{{ tag }}</span>
      </div>
      <div class="media">
        <div class="media-left">
          <figure class="border-radius-full overflow-hidden is-48x48 image">
            <img :src="article.author.image" alt="Author Bild">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ article.author.name }}</p>
          <time class="subtitle is-6 is-block" :datetime="article.date">{{ articleDate }}</time>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      required: true
    }
  },
  data() {
    return {
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    articleLink() {
      return "/blog/" + this.article.slug
    },
    articleDate() {
      const date = new Date(this.article.date)
      return date.getDate() + ". " + this.months[date.getMonth()] + " " + date.getFullYear()
    }
  }
}

</script>
<style lang="scss">
.border-radius-6 {
  border-radius: 6px;
}

.overflow-hidden {
  overflow: hidden;
}

.mb-10 {
  margin-bottom: 1.0rem;
}

.mb-18 {
  margin-bottom: 1.8rem;
}

.overflow-hidden {
  overflow: hidden;
}

.border-radius-full {
  border-radius: 100%;
}

.article {
  height: 100%;
  display: flex;
  flex-direction: column;

  &--bottom {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  &:hover {
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.5), 0 0 0 1px rgba(10, 10, 10, 0.02);
    .title.is-3 {
      color: $dark;
    }
  }
}

</style>

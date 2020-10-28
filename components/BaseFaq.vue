<template>
  <div class="mb-12 faq card border-radius-6" @click="clicked">
    <div ref="question" class="faq--question card-header border-radius-6">
      <div class="card-header-title">
        {{ question }}
      </div>
      <div class="card-header-icon" :style="iconStyle">
        <span class="icon has-text-primary">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="svg-inline--fa fa-angle-down fa-w-10"
          >
            <path
              fill="currentColor"
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              class=""
            ></path>
          </svg>
        </span>
      </div>
    </div>
    <div ref="answer" class="faq--answer" :style="{ height: answerHeight }">
      <div class="card-content">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFaq",
  components: {},
  props: {
    question: {
      required: true
    },
    answer: {
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    clicked() {
      this.isOpen = this.isOpen ? false : true;
    }
  },
  computed: {
    answerHeight() {
      return this.isOpen && this.$refs.answer
        ? this.$refs.answer.scrollHeight + "px"
        : 0;
    },
    iconStyle() {
      return this.isOpen ? { transform: "scaleY(-1)" } : {};
    }
  }
};
</script>
<style lang="scss">
.border-radius-6 {
  border-radius: 6px;
}

.mb-12 {
  margin-bottom: 1.2rem !important;
}

.faq--answer {
  transition: height 0.6s;
}

.faq {
  overflow: hidden;

  &--question {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

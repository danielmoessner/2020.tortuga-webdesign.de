<template>
  <div class="flex-inline px-2">
    <a
      class="custom-button cursor-pointer border-0 hover:bg-teal-600 hover:text-teal-600 relative bg-teal-500 text-teal-500 inline-flex transition duration-150 ease-in-out focus:outline-none"
      href="#"
    >
      <div class="px-4 py-2 text-gray-100 text-base leading-6 font-bold">
        Click me
      </div>
      <TriangleSvg class="absolute transform right-0 translate-x-1/2" />
      <TriangleSvg
        class="absolute transform left-0 -translate-x-1/2 rotate-180"
      />
    </a>
  </div>
</template>

<script>
import TriangleSvg from "@/components/TriangleSvg.vue";

export default {
  name: "SecondaryButton",
  components: {
    TriangleSvg
  }
};
</script>

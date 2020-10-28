<template>
  <main>
    <!---->
    <base-section>
      <h1 class="text-6xl mb-24">Styleguide</h1>
      <!--  -->
      <StyleguideHeading text="Typography" />
      <div class="grid grid-cols-2 gap-8">
        <div>
          <StyleguideColumn text="Heading 1">
            <h1 class="text-6xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h1>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 2" class="col-start-1">
            <h2 class="text-4xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h2>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 3" class="col-start-1">
            <h3 class="text-3xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h3>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 4" class="col-start-1">
            <h4 class="text-2xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h4>
          </StyleguideColumn>
        </div>
        <div>
          <StyleguideColumn text="Paragraph" class="col-start-2">
            <p class="text-lg mb-2 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              quas magni distinctio doloremque laudantium odit ea non nostrum
              eveniet quisquam nobis, inventore repudiandae, nemo vel culpa
              animi porro eaque! Nisi?
            </p>
            <p class="text-lg text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              nobis facere incidunt aliquam nihil facilis voluptatum. Distinctio
              officiis provident sint vitae recusandae harum, eos consequatur?
              Quasi maiores maxime eius ea.
            </p>
          </StyleguideColumn>
          <StyleguideColumn text="Paragraph Small">
            <p class="mb-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              provident aperiam iure totam distinctio dolorum, repudiandae quod
              molestiae hic esse qui alias. Aliquid dicta itaque, earum placeat
              vel iure doloremque.
            </p>
            <p class="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              reiciendis unde molestiae itaque voluptatem, nostrum quo nam!
              Maiores consequuntur tempora, quis accusamus officia, et, eveniet
              iure sit dolor aliquid vero?
            </p>
          </StyleguideColumn>
        </div>
      </div>
      <!--  -->
      <StyleguideHeading text="Buttons" />
      <div class="grid grid-cols-3 gap-8">
        <StyleguideColumn text="Primary">
          <PrimaryButton />
        </StyleguideColumn>
        <StyleguideColumn text="Secondary">
          <SecondaryButton />
        </StyleguideColumn>
        <StyleguideColumn text="Tertiary">
          <TertiaryButton />
        </StyleguideColumn>
      </div>
      <!--  -->
      <StyleguideHeading text="Colors" />
      <div class="grid grid-cols-5">
        <StyleguideColumn text="Red">
          <div class="h-12 bg-red-100"></div>
          <div class="h-12 bg-red-200"></div>
          <div class="h-12 bg-red-300"></div>
          <div class="h-12 bg-red-400"></div>
          <div class="h-12 bg-red-500 border"></div>
          <div class="h-12 bg-red-600 border"></div>
          <div class="h-12 bg-red-700"></div>
          <div class="h-12 bg-red-800"></div>
          <div class="h-12 bg-red-900"></div>
        </StyleguideColumn>
        <StyleguideColumn text="Teal">
          <div class="h-12 bg-teal-100"></div>
          <div class="h-12 bg-teal-200"></div>
          <div class="h-12 bg-teal-300"></div>
          <div class="h-12 bg-teal-400"></div>
          <div class="h-12 bg-teal-500 border"></div>
          <div class="h-12 bg-teal-600 border"></div>
          <div class="h-12 bg-teal-700"></div>
          <div class="h-12 bg-teal-800"></div>
          <div class="h-12 bg-teal-900"></div>
        </StyleguideColumn>
        <StyleguideColumn text="Green">
          <div class="h-12 bg-green-100"></div>
          <div class="h-12 bg-green-200"></div>
          <div class="h-12 bg-green-300"></div>
          <div class="h-12 bg-green-400 border"></div>
          <div class="h-12 bg-green-500 border"></div>
          <div class="h-12 bg-green-600"></div>
          <div class="h-12 bg-green-700"></div>
          <div class="h-12 bg-green-800"></div>
          <div class="h-12 bg-green-900"></div>
        </StyleguideColumn>
        <StyleguideColumn text="Brown">
          <div class="h-12 bg-brown-100"></div>
          <div class="h-12 bg-brown-200"></div>
          <div class="h-12 bg-brown-300"></div>
          <div class="h-12 bg-brown-400"></div>
          <div class="h-12 bg-brown-500"></div>
          <div class="h-12 bg-brown-600"></div>
          <div class="h-12 bg-brown-700"></div>
          <div class="h-12 bg-brown-800"></div>
          <div class="h-12 bg-brown-900"></div>
        </StyleguideColumn>
        <StyleguideColumn text="Neutral">
          <div class="h-12 bg-gray-100"></div>
          <div class="h-12 bg-gray-200"></div>
          <div class="h-12 bg-gray-300"></div>
          <div class="h-12 bg-gray-400"></div>
          <div class="h-12 bg-gray-500"></div>
          <div class="h-12 bg-gray-600"></div>
          <div class="h-12 bg-gray-700"></div>
          <div class="h-12 bg-gray-800"></div>
          <div class="h-12 bg-gray-900"></div>
        </StyleguideColumn>
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
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import TertiaryButton from "@/components/TertiaryButton.vue";
import StyleguideColumn from "@/components/StyleguideColumn.vue";
import StyleguideHeading from "@/components/StyleguideHeading.vue";

export default {
  name: "Styleguide",
  components: {
    StyleguideColumn,
    TertiaryButton,
    StyleguideHeading,
    PrimaryButton,
    SecondaryButton,
    BaseSection,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Styleguide"
    };
  }
};
</script>

<template>
  <div
    :class="[
      tw`bg-gray-100 dark:bg-gray-800 overflow-auto`,
      !inline ? tw`line-numbers px-1 py-2` : tw`px-8 py-6`
    ]"
  >
    <Prism :language="lang === 'vue' ? 'html' : lang" :inline="inline">{{
      formattedCode
    }}</Prism>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { tw } from "twind";
import Strip from "strip-indent";
import PrismJs from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import Prism from "vue-prism-component";

export default defineComponent({
  components: {
    Prism,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: "html",
      validator: (v: string) =>
        ["js", "vue", "json", "html", "bash"].includes(v),
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const formattedCode = computed(() => Strip(props.code));
    onMounted(() => {
      PrismJs.highlightAll();
    });
    return { formattedCode, tw };
  },
});
</script>

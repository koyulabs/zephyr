<template>
  <blockquote :class="classes">
    <slot></slot>
  </blockquote>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Classy } from "@/utils/helpers";

export default defineComponent({
  setup() {
    const classes = computed(() =>
      new Classy("p-6 border-l-4 border-green-500 bg(gray-100 dark:gray-800)")
        .twind()
        .val()
    );
    return { classes };
  },
});
</script>

<template>
  <code :class="classes">
    <slot></slot>
  </code>
</template>

<script lang="ts">
import { classAppend, classRemove } from "@/props";
import { Classy } from "@/utils/helpers";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    ...classAppend(),
    ...classRemove(),
  },
  setup(props) {
    const classes = computed(() =>
      new Classy(
        "bg-green-50 text-green-800 dark:text-white dark:bg-gray-700 dark:bg-opacity-50 text-sm py-1 px-1.5 rounded-md"
      )
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind()
        .val()
    );
    return { classes };
  },
});
</script>

<style scoped>
</style>
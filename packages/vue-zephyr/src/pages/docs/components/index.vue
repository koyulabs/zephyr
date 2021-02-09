<template>
  <div>
    <DocHeader>
      <template #title> Components </template>
      <template #subtitle>
        Learn about what components are available with Zephyr.
      </template>
    </DocHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@components-local/DocHeader.vue";

export default defineComponent({
  components: {
    DocHeader,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

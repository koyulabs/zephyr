<template>
  <DocHeader>
    <template #title>Theming</template>
    <template #subtitle>Customize the apperance for your project.</template>
    <template #right-side>
      <div :class="tw`justify-end flex items-start md:mt-2 space-x-2`">
        <Badge classAppend="bg-yellow-500 text-gray-900">In Progress</Badge>
      </div>
    </template>
    <template #notice>
      <div :class="tw`flex items-center`">
        <svg
          :class="tw`w-12 mr-4`"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          This project is in early development. There still may be significant
          changes in the future, so please use with caution. Follow us on
          <Anchor variant="primary" href="https://twitter.com/usezephyr" newTab
            >Twitter</Anchor
          >
          for updates.
        </div>
      </div>
    </template>
  </DocHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import DocHeader from "@components-local/DocHeader.vue";
import Badge from "@components-local/Badge.vue";

export default defineComponent({
  components: {
    DocHeader,
    Badge,
  },
  setup() {
    return { tw };
  },
});
</script>

<route>
{
  "name": "theming",
  "meta": {
    "title": "Theming",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Theming"
      },
      {
        "name": "twitter:title",
        "content": "Theming"
      },
      {
        "name": "description",
        "content": "Customize the apperance for your project."
      },
      {
        "property": "og:description",
        "content": "Customize the apperance for your project."
      },
      {
        "property": "twitter:description",
        "content": "Customize the apperance for your project."
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/theming"
      },
      {
        "property": "og:image",
        "content": "https://usezephyr.com/cover.png"
      },
      {
        "property": "twitter:image",
        "content": "https://usezephyr.com/cover.png"
      },
      {
        "name": "twitter:site",
        "content": "@usezephyr"
      },
      {
        "name": "twitter:creator",
        "content": "@usezephyr"
      },
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      }
    ]
  }
}
</route>

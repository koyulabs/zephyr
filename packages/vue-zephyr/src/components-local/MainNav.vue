<template>
  <nav :class="tw`flex items-center`">
    <Link to="/" :class="tw`text-lg flex items-center`">
      <inline-svg
        :class="tw`w-6 mr-3`"
        :src="require('@public/simple-logo.svg')"
      />
      <div>Vue Zephyr</div>
    </Link>
    <ul :class="tw`flex items-center space-x-4 ml-auto`">
      <li>
        <Link to="/docs/install">Documentation</Link>
      </li>
      <li>
        <Link to="/guides">Guides</Link>
      </li>
      <li>
        <Anchor href="https://twitter.com/usezephyr" newTab>Updates</Anchor>
      </li>
      <li>|</li>
      <li>
        <LightSwitch />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import InlineSvg from "vue-inline-svg";
import Link from "@components-local/Link.vue";
import LightSwitch from "@components-local/LightSwitch.vue";
import Anchor from "@components/Anchor/Anchor.vue";
export default defineComponent({
  components: {
    InlineSvg,
    Link,
    LightSwitch,
    Anchor,
  },
  setup() {
    return { tw };
  },
});
</script>

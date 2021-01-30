<template>
  <img
    v-if="isDark"
    :class="tw`absolute w-full top-0 right-0 left-0`"
    src="@/assets/images/gradient-top-dark.png"
  />
  <img
    v-else
    :class="tw`absolute w-full top-0 right-0 left-0`"
    src="@/assets/images/gradient-top-light.png"
  />
  <main :class="tw`h-full flex(& col) relative`">
    <div :class="tw`mt-6`">
      <Container>
        <MainNav />
      </Container>
    </div>
    <div :class="tw`mt-8 layout`">
      <Container>
        <BaseLayout />
      </Container>
    </div>
    <Footer :class="tw`mt-auto`" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import { isDark } from "@utils/darkMode";
import _Base from "@layouts/_base.vue";
import Container from "@components-local/Container.vue";
import MainNav from "@components-local/MainNav.vue";
import Footer from "@components-local/Footer.vue";

export default defineComponent({
  components: {
    BaseLayout: _Base,
    Container,
    MainNav,
    Footer,
  },
  setup() {
    return { tw, isDark };
  },
});
</script>

<style scoped></style>

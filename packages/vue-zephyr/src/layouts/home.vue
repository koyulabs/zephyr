<template>
  <main :class="tw`h-full flex(& col) relative`">
    <div :class="tw`bg-green-600 text-white py-6`">
      <Container>
        <MainNav />
      </Container>
    </div>
    <div :class="tw`layout`">
      <BaseLayout />
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

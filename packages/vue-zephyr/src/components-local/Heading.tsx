import { defineComponent } from "vue";
import { tw } from "twind";

export const H3 = defineComponent({
  setup(_, { slots }) {
    return () => (
      <h3 class={tw`font-medium text-gray-900 dark:text-gray-100 text-3xl`}>
        {slots.default?.() ?? null}
      </h3>
    );
  },
});

export const H4 = defineComponent({
  setup(_, { slots }) {
    return () => (
      <h4 class={tw`font-medium text-gray-900 dark:text-gray-100 text-xl`}>
        {slots.default?.() ?? null}
      </h4>
    );
  },
});

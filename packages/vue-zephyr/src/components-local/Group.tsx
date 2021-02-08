import { defineComponent } from "vue";
import { tw } from "twind";

export const Group = defineComponent({
  setup(_, { slots }) {
    return () => <div class={tw`space-y-8`}>{slots.default?.() ?? null}</div>;
  },
});

export const Subgroup = defineComponent({
  setup(_, { slots }) {
    return () => <div class={tw`space-y-4`}>{slots.default?.() ?? null}</div>;
  },
});

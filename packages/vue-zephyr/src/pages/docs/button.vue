<template>
  <DocHeader>
    <template #title>Button</template>
    <template #subtitle>A basic, all purpose button.</template>
  </DocHeader>
  <div :class="tw`h-8`"></div>
  <Blockquote
    >Under the hood, this component uses the Menu component from Headless UI.
    The intention is to use the similar APIs, however please be sure to read
    this documentation to distinguish any differences.</Blockquote
  >
  <div :class="tw`h-16`"></div>
  <div :class="tw`space-y-12 mb-20`">
    <Group>
      <Subgroup>
        <H3>Import</H3>
        <Divider />
        <div :class="tw`space-y-6`">
          <div :class="tw`rounded-lg overflow-hidden`">
            <CodeBlock lang="js" :code="codes.install" inline />
          </div>
        </div>
      </Subgroup>
    </Group>
    <Group>
      <Subgroup>
        <H3>{{ toTitleCase(t("pages._global.usage", 2)) }}</H3>
        <Divider />
        <H4>
          Variants
          <span v-if="locale !== 'en'"
            >({{ toTitleCase(t("pages._global.variant", 2)) }})</span
          >
        </H4>
        <Example lang="vue" :code="codes.variant">
          <div
            :class="
              tw`flex flex-col items-start space-y-4 md:(space-x-4 space-y-0 flex-row items-center)`
            "
          >
            <ZButton>Primary</ZButton>
            <ZButton variant="secondary">Secondary</ZButton>
            <ZButton variant="outline">Outline</ZButton>
            <ZButton variant="success">Success</ZButton>
            <ZButton variant="danger">Danger</ZButton>
            <ZButton variant="warn">Warn</ZButton>
          </div>
        </Example>
      </Subgroup>
      <Subgroup>
        <H4>
          Sizes
          <span v-if="locale !== 'en'"
            >({{ toTitleCase(t("pages._global.size", 2)) }})</span
          >
        </H4>
        <Example lang="vue" :code="codes.size">
          <div
            :class="
              tw`flex flex-col items-start space-y-4 md:(space-x-4 space-y-0 flex-row items-center)`
            "
          >
            <ZButton size="xs">Extra Small</ZButton>
            <ZButton size="sm">Small</ZButton>
            <ZButton>Medium</ZButton>
            <ZButton size="lg">Large</ZButton>
            <ZButton size="xl">Extra Large</ZButton>
          </div>
        </Example>
      </Subgroup>
    </Group>
    <Group>
      <Subgroup>
        <H3>{{ toTitleCase(t("pages._global.example", 2)) }}</H3>
        <Divider />
      </Subgroup>
      <Subgroup>
        <H4>Light Switch</H4>
        <Example lang="vue" :code="codes.lightSwitch">
          <ZButton @click="toggleScheme"
            >Turn {{ isDark ? "ON" : "OFF" }} the lights</ZButton
          >
        </Example>
      </Subgroup>
      <Subgroup>
        <H4>Button Group</H4>
        <Example lang="vue" :code="codes.buttonGroup">
          <ZButton
            variant="success"
            classRemove="rounded-md"
            classAppend="rounded-l-md"
            >Left Side</ZButton
          >
          <ZButton variant="warn" classRemove="rounded-md">Center</ZButton>
          <ZButton
            variant="danger"
            classRemove="rounded-md"
            classAppend="rounded-r-md"
            >Right</ZButton
          >
        </Example>
      </Subgroup>
    </Group>
    <Group>
      <H3>{{ toTitleCase(t("pages._global.props", 2)) }}</H3>
      <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
        <div
          :class="
            tw`overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg`
          "
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th>Default</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>variant</Td>
                <Td>Set button variant</Td>
                <Td>String</Td>
                <Td>
                  <Code>"primary"</Code>
                </Td>
              </Tr>
              <Tr>
                <Td>size</Td>
                <Td>Set button size</Td>
                <Td>String</Td>
                <Td>
                  <Code>"md"</Code>
                </Td>
              </Tr>
              <Tr>
                <Td>status</Td>
                <Td>Set button status</Td>
                <Td>
                  <Code>disabled</Code> | <Code>loading</Code> |
                  <Code>default</Code>
                </Td>
                <Td>
                  <Code>"default"</Code>
                </Td>
              </Tr>
              <Tr>
                <Td>classAppend</Td>
                <Td>Append class to existing class list</Td>
                <Td>String</Td>
                <Td>—</Td>
              </Tr>
              <Tr>
                <Td>classRemove</Td>
                <Td>Remove class from existing class list</Td>
                <Td>String</Td>
                <Td>—</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </TableWrapper>
    </Group>
    <Group>
      <H3 id="default">Default Theme</H3>
      <p :class="tw`mt-4`">
        As always, the default theme can be
        <a :class="tw`text-shamrock hover:text-shamrock-700`" href="#"
          >extended or modified</a
        >. In any case, here is the default theme for this component:
      </p>
      <!-- <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div> -->
      <div :class="tw`mt-4`">
        <CodeBlock :class="tw`rounded-lg`" :code="defaultTheme" lang="json" />
      </div>
    </Group>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-useless-escape */
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { tw } from "twind";
import { darkMode } from "@/utils/darkMode";
import { locale } from "@utils/locale";
import { toTitleCase } from "@utils/stringMods";
import DocHeader from "@components-local/DocHeader.vue";
import Blockquote from "@components-local/Blockquote.vue";
import Divider from "@components-local/Divider.vue";
import Example from "@components-local/Example.vue";
import Code from "@components-local/Code.vue";
import CodeBlock from "@components-local/CodeBlock.vue";
import Button from "@components/Button/Button.vue";
import Theme from "@components/Button/theme.ts";
import { H3, H4 } from "@components-local/Heading.tsx";
import { Group, Subgroup } from "@components-local/Group.tsx";

export default defineComponent({
  components: {
    DocHeader,
    Blockquote,
    Divider,
    ZButton: Button, // Don't confuse Vue
    Example,
    Code,
    CodeBlock,
    H3,
    H4,
    Group,
    Subgroup,
  },
  setup() {
    const { t } = useI18n();
    const { isDark, toggleScheme } = darkMode();

    const codes = {
      install: `import { Button } from "@usezephyr/vue-zephyr";`,
      variant: `
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warn">Warn</Button>
      `,
      size: `
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      `,
      lightSwitch: `
        <Button @click="toggleScheme">
          Turn {{ isDark ? "ON" : "OFF" }} the lights
        </Button>
      `,
      buttonGroup: `
        <Button variant="success" classRemove="rounded-md" classAppend="rounded-l-md">
          Left Side
        </Button>
        <Button variant="warn" classRemove="rounded-md">
          Center
        </Button>
        <Button variant="danger" classRemove="rounded-md" classAppend="rounded-r-md">
          Right
        </Button>
      `,
    };

    const defaultTheme = JSON.stringify(Theme(), null, 1);

    return {
      tw,
      isDark,
      toggleScheme,
      codes,
      toTitleCase,
      t,
      locale,
      defaultTheme,
    };
  },
});
</script>

<route>
{
  "name": "button",
  "meta": {
    "title": "Button",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Button"
      },
      {
        "name": "twitter:title",
        "content": "Button"
      },
      {
        "name": "description",
        "content": "A basic, all purpose button"
      },
      {
        "property": "og:description",
        "content": "A basic, all purpose button"
      },
      {
        "property": "twitter:description",
        "content": "A basic, all purpose button"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/button"
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

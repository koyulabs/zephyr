<template>
  <DocHeader>
    <template #title> Installation </template>
    <template #subtitle>Get started with Vue Zephyr in minutes.</template>
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
  <div :class="tw`mt-12 mb-24 space-y-12`">
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        Requirements
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-6`">
        <p>
          Vue Zephyr currently supports Vue 3 and higher (as released). There
          are no plans to support Vue 2.
        </p>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">Install</h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-6`">
        <p>Inside your project directory install Vue Zephyr via NPM or Yarn:</p>
        <div :class="tw`space-y-4`">
          <div :class="tw`rounded-lg overflow-hidden`">
            <CodeBlock lang="bash" :code="codes.npmInstall" inline />
          </div>
          <div :class="tw`rounded-lg overflow-hidden`">
            <CodeBlock lang="bash" :code="codes.yarnInstall" inline />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        Configure
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-8`">
        <p>There are two methods of adding Vue Zephyr to your application.</p>
        <p>Use as plugin:</p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <CodeBlock lang="js" :code="codes.configAsPlugin" />
        </div>
        <p>Or import components individually:</p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <CodeBlock lang="vue" :code="codes.configAsComponent" />
        </div>
        <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
          Plugin Options
        </h4>
        <p>
          When using Zephyr as a plugin you may pass an optional configuration
          object to make certain global changes. These options get merged into
          the default config, so you only need to pass the values you would like
          to add or change.
        </p>
        <div>
          There two main sections available in the config:
          <ul :class="tw`list-disc list-inside pl-3 mt-2 leading-7`">
            <li>
              <Code>theme</Code>
              : pass your own custom theme object for Zephyr to load.
            </li>
            <li>
              <Code>twind</Code>
              <ul :class="tw`list-disc list-inside pl-6`">
                <li>
                  <Code>enable:</Code> enable or disable Twind (defaults to
                  <Code>true</Code>)
                </li>
                <li>
                  <Code>setup:</Code> pass options to Twind's
                  <Code>setup</Code> function. Please read
                  <Anchor
                    href="https://github.com/tw-in-js/twind/blob/main/docs/setup.md"
                    variant="primary"
                    newTab
                    >Twind's documentation</Anchor
                  >
                  to see what options are available.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div :class="tw`rounded-lg overflow-hidden`">
          <CodeBlock lang="js" :code="codes.pluginConfig" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-useless-escape */
import { defineComponent } from "vue";
import { tw } from "twind";
import DocHeader from "@components-local/DocHeader.vue";
import Badge from "@components-local/Badge.vue";
import Code from "@components-local/Code.vue";
import CodeBlock from "@components-local/CodeBlock.vue";

export default defineComponent({
  components: {
    DocHeader,
    Code,
    CodeBlock,
    Badge,
  },
  setup() {
    const codes = {
      npmInstall: `npm i @usezephyr/vue-zephyr`,
      yarnInstall: `yarn add @usezephyr/vue-zephyr`,
      configAsPlugin: `
        import { createApp } from "vue";
        import App from "./App.vue";
        import Zephyr from "@usezephyr/vue-zephyr";

        const app = createApp(App);

        // \`Zephyr\` is a function that needs to be called here
        app.use(Zephyr(/* Config Options here */));
        app.mount("#app");
      `,
      configAsComponent: `
        // Replace \`ExampleComponent\` with whichever component you would like to import
        <template>
          <ExampleComponent />
        </template>

        <script>
        import { ExampleComponent } from "@usezephyr/vue-zephyr";
        export default {
          components: { ExampleComponent }
        };
        <\/script>
      `,
      pluginConfig: `
        import { createApp } from "vue";
        import App from "./App.vue";
        import Zephyr from "@usezephyr/vue-zephyr";
        import myTheme from "./myTheme.js"

        const app = createApp(App);
        const ZConfig = {
          theme: myTheme,
          twind: {
            enable: true, /* Defaults to true */
            setup: { /* Twind configuration */ }
          }
        }
        app.use(Zephyr(ZConfig));
        app.mount("#app");
      `,
    };
    return { codes, tw };
  },
});
</script>

<route>
{
  "name": "install",
  "meta": {
    "title": "Installation",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Installation"
      },
      {
        "name": "twitter:title",
        "content": "Installation"
      },
      {
        "name": "description",
        "content": "Get started with Vue Zephyr in minutes."
      },
      {
        "property": "og:description",
        "content": "Get started with Vue Zephyr in minutes."
      },
      {
        "property": "twitter:description",
        "content": "Get started with Vue Zephyr in minutes."
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/install"
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

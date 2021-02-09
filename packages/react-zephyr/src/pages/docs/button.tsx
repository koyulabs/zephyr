import { ReactElement } from "react";
import { tw } from "twind";
import Link from "next/link";
import DefaultLayout from "@layouts/Default";
import DocHeader from "@components-local/DocHeader";
// import Button from "@components/Button/Button";
import { Group, Subgroup } from "@components-local/Group";
import { H3, H4 } from "@components-local/Heading";
import Divider from "@components-local/Divider";
import Blockquote from "@components-local/Blockquote";
import CodeBlock from "@components-local/CodeBlock";

export default function button(): ReactElement {
  const title = "Button";
  const codes = {
    install: `import { Button } from "@usezephr/vue-zephyr";`,
  };
  return (
    <DefaultLayout title={title}>
      <DocHeader>
        <DocHeader.Title>{title}</DocHeader.Title>
        <DocHeader.Subtitle>A basic, all purpose button</DocHeader.Subtitle>
      </DocHeader>
      <div className={tw`h-8`}></div>
      <Blockquote>
        Under the hood, this component uses the <code>Menu</code> component from{" "}
        <Link href="https://headlessui.dev/">Headless UI</Link>. The intention
        is to use the similar APIs, however please be sure to read this
        documentation to distinguish any differences.
      </Blockquote>
      <div className={tw`h-16`}></div>
      <div className="tw`space-y-12 mb-20`">
        <Group>
          <>
            <Subgroup>
              <>
                <H3>Import</H3>
                <Divider />
                <div className={tw`space-y-6`}>
                  <div className={tw`rounded-lg overflow-hidden`}>
                    <CodeBlock lang="js" code={codes.install} inline />
                  </div>
                </div>
              </>
            </Subgroup>
          </>
        </Group>
        <Group>
          <Subgroup>
            <>
              <H3>Usage</H3>
              <Divider />
              <H4>Variants</H4>
              {/* <Example lang="vue" code={codes.variant}>
                <div
                  className="
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
              </Example> */}
            </>
          </Subgroup>
        </Group>
      </div>
    </DefaultLayout>
  );
}

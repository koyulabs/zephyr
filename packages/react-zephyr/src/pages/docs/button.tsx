import { ReactElement, useContext } from "react";
import "@twind/macro";
import Link from "next/link";
import DefaultLayout from "@layouts/Default";
import DocHeader from "@components-local/DocHeader";
import Button from "@components/Button/Button";
import { Section1 } from "@components-local/Section";
import { H3 } from "@components-local/Heading";
import Divider from "@components-local/Divider";
import Blockquote from "@components-local/Blockquote";

export default function button(): ReactElement {
  const title = "Button";
  return (
    <DefaultLayout title={title}>
      <DocHeader>
        <DocHeader.Title>{title}</DocHeader.Title>
        <DocHeader.Subtitle>A basic, all purpose button</DocHeader.Subtitle>
      </DocHeader>
      <div tw="h-8"></div>
      <Blockquote>
        Under the hood, this component uses the <code>Menu</code> component from{" "}
        <Link href="https://headlessui.dev/">Headless UI</Link>. The intention
        is to use the similar APIs, however please be sure to read this
        documentation to distinguish any differences.
      </Blockquote>
      <div tw="h-16"></div>
      <Section1>
        <div>
          <H3>Usage</H3>
          <Divider></Divider>
          <Button status="disabled">Testing</Button>
        </div>
        <div>
          <Button variant="indigo" size="xl">
            Testing
          </Button>
        </div>
      </Section1>
    </DefaultLayout>
  );
}

import { ReactElement } from "react";
import "@twind/macro";
import DefaultLayout from "@layouts/Default";
import DocHeader from "@components-local/DocHeader";

export default function install(): ReactElement {
  const title = "Install";
  return (
    <DefaultLayout title={title}>
      <DocHeader>
        <DocHeader.Title>{title}</DocHeader.Title>
        <DocHeader.Subtitle>A basic, all purpose button</DocHeader.Subtitle>
        <DocHeader.Notice>Here is a warning about this page</DocHeader.Notice>
      </DocHeader>
    </DefaultLayout>
  );
}

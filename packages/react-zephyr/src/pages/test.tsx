import React, { ReactElement } from "react";
import Button from "@components/Button/Button";
import "@twind/macro";

export default function Test(): ReactElement {
  return (
    <div tw="bg-gray-100 p-8">
      <Button classRemove="rounded-md" classAppend="italic" />
    </div>
  );
}

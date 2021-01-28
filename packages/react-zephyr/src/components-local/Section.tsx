import { ReactElement, ReactNode } from "react";
import "@twind/macro";

export const Section1 = ({ children = null as ReactNode }): ReactElement => {
  return <div tw="space-y-8">{children}</div>;
};

export const Section2 = ({ children = null as ReactNode }): ReactElement => {
  return <div tw="space-y-4">{children}</div>;
};

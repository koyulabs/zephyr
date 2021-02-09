import { ReactElement } from "react";
import "@twind/macro";

interface Props {
  children: ReactElement;
}

export const Group = ({ children }: Props): ReactElement => {
  return <div tw="space-y-8">{children}</div>;
};

export const Subgroup = ({ children }: Props): ReactElement => {
  return <div tw="space-y-4">{children}</div>;
};

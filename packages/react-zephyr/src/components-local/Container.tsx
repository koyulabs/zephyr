import { ReactElement, ReactNode } from "react";
import "@twind/macro";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  return <div tw="max-w-7xl mx-auto px-4 sm:px-8">{children}</div>;
}

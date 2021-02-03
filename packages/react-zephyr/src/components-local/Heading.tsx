import { ReactElement, ReactNode } from "react";
import "@twind/macro";

interface Props {
  children: ReactNode;
}

export const H3 = ({ children }: Props): ReactElement => {
  return (
    <h3 tw="font-medium text-gray-900 dark:text-gray-100 text-3xl">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: Props): ReactElement => {
  return (
    <h4 tw="font-medium text-gray-900 dark:text-gray-100 text-2xl">
      {children}
    </h4>
  );
};

import { ReactElement, ReactNode } from "react";
import "@twind/macro";

export const H3 = ({ children = null as ReactNode }): ReactElement => {
  return (
    <h3 tw="font-medium text-gray-900 dark:text-gray-100 text-3xl">
      {children}
    </h3>
  );
};

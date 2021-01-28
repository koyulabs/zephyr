import { ReactElement, ReactNode } from "react";
import "@twind/macro";

export const Blockquote = ({ children = null as ReactNode }): ReactElement => {
  return (
    <blockquote tw="p-6 border-l-4 border-green-500 bg(gray-100 dark:gray-800)">
      {children}
    </blockquote>
  );
};

export default Blockquote;

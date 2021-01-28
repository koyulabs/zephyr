import { ReactElement, ReactNode } from "react";
import "@twind/macro";

const Divider = (): ReactElement => {
  return <div tw="border-t border-gray-200 dark:border-gray-800 my-4"></div>;
};

export default Divider;

import { ReactElement } from "react";
import useDarkMode from "@utils/darkMode";

export default function _Base(): ReactElement {
  const { darkMode, setDarkMode } = useDarkMode();
  return <div></div>;
}

import { ReactElement, ReactNode, useContext } from "react";
import { Classy } from "@utils/helpers";
import Theme from "./Button.theme";
import { ZephyrContext } from "@utils/context";

export default function Button({
  children = null as ReactNode,
  classAppend = "" as Classes,
  classRemove = "" as Classes,
  variant = "primary" as Variant,
  size = "md" as string,
  status = null as string | null,
}): ReactElement {
  const theme = Theme(useContext(ZephyrContext));
  const classes = new Classy()
    .append(theme[status ?? variant])
    .append(theme.size[size])
    .append(classAppend)
    .remove(classRemove)
    .twind()
    .val();

  return <button className={classes}>{children}</button>;
}

import { ReactElement, ReactNode, useContext } from "react";
import { Classy } from "@utils/helpers";
import { Button as Theme } from "@usezephyr/theme";
import { ZephyrContext } from "@utils/context";

interface ButtonProps {
  children: ReactNode;
  classAppend?: Classes;
  classRemove?: Classes;
  variant?: Variant;
  size?: string;
  status?: string;
}

export default function Button({
  children,
  classAppend = "",
  classRemove = "",
  variant = "primary",
  size = "md",
  status,
}: ButtonProps): ReactElement {
  const theme = Theme(useContext(ZephyrContext));
  const classes = new Classy()
    .append(theme[status ?? variant])
    .append(theme.size[size])
    .append(classAppend)
    .remove(classRemove)
    .twind()
    .val();
  return (
    <button className={classes} disabled={status === "disabled"}>
      {children}
    </button>
  );
}

import React, { ReactNode } from "react";

const ZephyrContext = React.createContext({});

function ZephyrProvider({
  theme = {} as object | null,
  children = null as ReactNode,
}) {
  return (
    <ZephyrContext.Provider value={theme}>{children}</ZephyrContext.Provider>
  );
}

const ZephyrConsumer = ZephyrContext.Consumer;

export { ZephyrContext, ZephyrProvider, ZephyrConsumer };

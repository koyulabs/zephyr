import { ReactElement, useEffect } from "react";
import clsx from "clsx";
import { tw } from "twind";
import Strip from "strip-indent";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

interface Props {
  code: string;
  lang?: "js" | "vue" | "json" | "html" | "bash";
  inline?: boolean;
}

export default function CodeBlock({
  code,
  lang = "js",
  inline = false,
}: Props): ReactElement {
  // Initialize Prism
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [code]);

  const langClass = `language-${lang === "vue" ? "html" : lang}`;
  const DynamicEl = `${inline ? "div" : "pre"}` as keyof JSX.IntrinsicElements;

  return (
    <div
      className={clsx([
        tw`bg-gray-100 dark:bg-gray-800 overflow-auto`,
        !inline ? tw`line-numbers px-1 py-2` : tw`px-8 py-6`,
      ])}
    >
      <DynamicEl>
        <code className={langClass}>{Strip(code)}</code>
      </DynamicEl>
    </div>
  );
}

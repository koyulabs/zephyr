import { ReactElement, useEffect } from "react";
import clsx from "clsx";
import { tw } from "twind";
import Strip from "strip-indent";
import PrismJs from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

interface Props {
  code: string;
  lang: "js" | "vue" | "json" | "html" | "bash";
  inline?: boolean;
}

export default function CodeBlock({
  code,
  lang = "js",
  inline = false,
}: Props): ReactElement {
  useEffect(() => {
    PrismJs.highlightAll();
  }, []);

  return (
    <div
      className={clsx([
        tw`bg-gray-100 dark:bg-gray-800 overflow-auto`,
        !inline ? tw`line-numbers px-1 py-2` : tw`px-8 py-6`,
      ])}
    >
      <code className={`language-${lang}`}>{Strip(code)}</code>
    </div>
  );
}

import { ReactElement, ReactNode } from "react";
import CodeBlock from "@components-local/CodeBlock";
import { tw } from "twind";

interface Props {
  children: ReactNode;
  code: string;
  lang?: "js" | "vue" | "json" | "html" | "bash";
  inline?: boolean;
}

export default function Example({
  children,
  code,
  lang,
  inline,
}: Props): ReactElement {
  return (
    <div>
      <div
        className={tw`p-8 border(t-2 r-2 l-2 gray-100 dark:gray-800) bg-white dark:bg-gray-700 dark:bg-opacity-60 rounded-t-lg`}
      >
        {children}
      </div>
      <div className={tw`rounded-b-lg overflow-hidden`}>
        <CodeBlock lang={lang} code={code} inline={inline} />
      </div>
    </div>
  );
}

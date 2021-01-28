import { ReactElement, ReactNode } from "react";
import "@twind/macro";

interface MainProps {
  children: ReactNode;
}

interface TitleProps {
  children: ReactNode;
}

interface NoticeProps {
  children: ReactNode;
}

const DocHeader = ({ children }: MainProps): ReactElement => {
  return (
    <header>
      <div tw="flex flex-col-reverse md:flex-row">
        <div tw="flex-auto">{children}</div>
      </div>
    </header>
  );
};

DocHeader.Title = ({ children }: TitleProps): ReactElement => {
  return (
    <div tw="mt-4 font-bold text-gray-900 dark:text-gray-100 text-4xl">
      {children}
    </div>
  );
};

DocHeader.Subtitle = ({ children }: TitleProps): ReactElement => {
  return <div tw="mt-1 text(gray-500 dark:gray-400 lg)">{children}</div>;
};

DocHeader.Notice = ({ children }: NoticeProps): ReactElement => {
  return <div>{children}</div>;
};

export default DocHeader;

import { ReactElement, ReactNode, useEffect } from "react";
import "@twind/macro";
import Head from "@components-local/Head";
import Container from "@components-local/Container";
import MainNav from "@components-local/MainNav";
import Sidebar from "@components-local/Sidebar";
import useDarkMode from "@utils/darkMode";
import { heightClasses, darkModeClasses } from "@utils/documentClasses";

interface Props {
  children: ReactNode;
  title: String;
}

export default function DefaultLayout({
  children,
  title,
}: Props): ReactElement {
  const { darkMode } = useDarkMode();

  // Apply document classes
  useEffect(() => {
    darkModeClasses();
    heightClasses();
  }, []);

  return (
    <div tw="h-full flex flex-col">
      <Head>
        <title>{title} | React Zephyr</title>
      </Head>

      <header>
        <div tw="bg-blue-600 text-white">
          <Container>
            <div tw="py-6">
              <MainNav />
            </div>
          </Container>
        </div>
      </header>

      <main tw="lg:mt-8">
        <Container>
          <div tw="lg:grid grid-cols-4 gap-12 mt-12">
            <div tw="col-span-1 lg:mt-1.5">
              <Sidebar active={title} />
            </div>
            <div tw="col-span-3 mt-8 lg:mt-0">{children}</div>
          </div>
        </Container>
      </main>

      <footer tw="mt-auto">This be the footer</footer>
    </div>
  );
}

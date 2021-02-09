import { ReactElement } from "react";
import "@twind/macro";
import Link from "next/link";
import Head from "@components-local/Head";
import Container from "@components-local/Container";
import MainNav from "@components-local/MainNav";

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>React Zephyr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header tw="bg-blue-600 text-white">
          <Container>
            <div tw="pt-6">
              <MainNav />
            </div>
          </Container>
          <div tw="pt-32">
            <Container>
              <div tw="grid grid-cols-2 gap-16">
                <div tw="grid-span-1 flex items-center pb-24">
                  <div>
                    <h1 tw="text-3xl font-bold tracking-wide">React Zephyr</h1>
                    <h2 tw="mt-4 text-lg">
                      The themeable component library built for Tailwind
                      developers.
                    </h2>
                    <div tw="inline-block bg-blue-700 rounded-lg p-4 mt-6 space-x-4">
                      <Link href="/docs/getting-started">Get Started</Link>
                      <Link href="https://github.com/usezephyr/vue-zephyr">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                <div tw="grid-span-1">
                  <div tw="bg-gray-800 h-64 w-full p-10 rounded-t-lg">
                    Code will go here
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </header>
      </main>
    </div>
  );
}

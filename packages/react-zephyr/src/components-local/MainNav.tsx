import { ReactElement } from "react";
import "@twind/macro";
import Link from "next/link";
import Logo from "@public/simple-logo.svg";
import useDarkMode from "@utils/darkMode";

interface Props {}

export default function MainNav({}: Props): ReactElement {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <nav tw="flex items-center">
      <Link href="/">
        <a tw="text-lg flex items-center">
          <Logo tw="w-6 mr-3" />
          <div>React Zephyr</div>
        </a>
      </Link>
      <ul tw="flex items-center space-x-4 ml-auto">
        <li>
          <Link href="/docs/install">Documentation</Link>
        </li>
        <li>
          <Link href="/guides">Guides</Link>
        </li>
        <li>
          <Link href="https://twitter.com/usezephyr">Updates</Link>
        </li>
        <li>|</li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

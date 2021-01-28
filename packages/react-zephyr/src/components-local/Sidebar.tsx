import { ReactElement, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import "@twind/macro";

type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

interface SidebarProps {
  active: String;
}
interface SidebarLinkProps {
  children: ReactNode;
}
interface SidebarHeadingProps {
  children: ReactNode;
}

const SidebarLink = ({
  children,
  href,
}: Merge<SidebarLinkProps, LinkProps>) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

const SidebarHeading = ({ children }: SidebarHeadingProps) => (
  <li tw="uppercase text-sm font-bold tracking-widest mb-3">{children}</li>
);

export default function Sidebar({ active }: SidebarProps): ReactElement {
  return (
    <ul tw="flex flex-col space-y-2">
      <SidebarHeading>Getting Started</SidebarHeading>
      <SidebarLink href="/docs/install">Install</SidebarLink>
      <SidebarLink href="/docs/button">Button</SidebarLink>
    </ul>
  );
}

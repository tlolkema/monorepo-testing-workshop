import * as React from "react";
import { Heading } from "../atoms/heading";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className="ui-group ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4"
      href={href}
      rel="noopener noreferrer"
    >
      <Heading title={title} />
      <p className="ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50">
        {children}
      </p>
    </a>
  );
}

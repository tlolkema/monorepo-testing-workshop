import { Heading } from "../atoms/heading";
import { Card } from "../molecules/card";
import type { Link } from "../types/types";

export function Deals({
  links,
  heading,
}: {
  links: Link[];
  heading: string;
}): JSX.Element {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Heading title={heading} />
      {links.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
}

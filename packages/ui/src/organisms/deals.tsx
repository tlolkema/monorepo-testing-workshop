import { Heading } from "../atoms/heading";
import { Card } from "../molecules/card";

interface Link {
  title: string;
  href: string;
  description: string;
}

export function Deals({ links }: { links: Link[] }): JSX.Element {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Heading title="Don't sleep on these amazing deals... they won't last long!" />
      {links.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
}

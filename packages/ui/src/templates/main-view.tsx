import { Deals } from "../organisms/deals";
import type { Link } from "../types/types";

export function MainView({ links }: { links: Link[] }): JSX.Element {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome!</h1>
      <Deals
        heading="Don't sleep on these amazing deals – they won't last long!"
        links={links}
      />
      <hr />
      <p>2023</p>
    </div>
  );
}

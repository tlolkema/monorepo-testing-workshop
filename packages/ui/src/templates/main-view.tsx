import { Deals } from "../organisms/deals";

const LINKS = [
  {
    title: "Summer Deal!",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Become a test automation guru for only $99!",
  },
  {
    title: "2 for 1 Deal!",
    href: "https://vercel.com/new",
    description: "Get 2 for 1 on all TURBO plans!",
  },
];

export function MainView(): JSX.Element {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome!</h1>
      <Deals
        heading="Don't sleep on these amazing deals – they won't last long!"
        links={LINKS}
      />
      <hr />
      <p>2023</p>
    </div>
  );
}

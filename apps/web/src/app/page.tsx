import { Deals } from "ui";

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

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Deals links={LINKS} />
    </main>
  );
}

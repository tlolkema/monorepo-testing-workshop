import { MainView } from "ui";

const LINKS = [
  {
    title: "Best Pizza in Town!",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Get 2 pizzas for the price of 1!",
  },
  {
    title: "Hawaiian Pizza!",
    href: "https://vercel.com/new",
    description: "Italians love it!",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainView links={LINKS} />
    </main>
  );
}

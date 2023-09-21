import { MainView } from "ui";

const LINKS = [
  {
    title: "🍕 Best Pizza in Town!",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Get 2 pizzas for the price of 1!",
  },
  {
    title: "🇮🇹 Hawaiian Pizza!",
    href: "https://www.google.com/search?q=hawaii+pizza",
    description: "Italians love it!",
  },
  {
    title: "🇮🇹 Pizza Calzone!",
    href: "https://www.google.com/search?q=hawaii+calzone",
    description: "Ghislain loves this!",
  },
  {
    title: "🇮🇹 Pizza Testy!",
    href: "https://www.google.com/search?q=hawaii+calzone",
    description: "Ghislain loves this!",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainView links={LINKS} />
    </main>
  );
}

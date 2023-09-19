import { MainView } from "ui";

const LINKS = [
  {
    title: "🏖️ Summer Deal!",
    href: "#",
    description: "Become a test automation guru for only $99!",
  },
  {
    title: "💌 Contact Us!",
    href: "/contact",
    description: "Contact us for even better deals",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainView links={LINKS} />
    </main>
  );
}

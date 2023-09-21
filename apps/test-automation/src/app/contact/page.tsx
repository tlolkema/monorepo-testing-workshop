import { Heading } from "ui";
import Button from "ui/src/atoms/button.tsx";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading title="Contact Us" />
      <Button text='Click me' />
    </main>
  );
}

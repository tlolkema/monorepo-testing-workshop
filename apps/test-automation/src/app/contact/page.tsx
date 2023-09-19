import { Heading } from "ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading title="Contact Us" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        data-testid="contact-button"
        type="button"
      >
        Click me
      </button>
    </main>
  );
}

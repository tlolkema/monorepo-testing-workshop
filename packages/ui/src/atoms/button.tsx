export function Button({ title }: { title: string }): JSX.Element {
  return (
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          data-testid="contact-button"
          type="button"
      >
          {title}{" "}
      </button>
  );
}

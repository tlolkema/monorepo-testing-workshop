export function Heading({ title }: { title: string }): JSX.Element {
  return (
    <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold">
      {title}{" "}
      <span className="ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none">
        -&gt;
      </span>
    </h2>
  );
}

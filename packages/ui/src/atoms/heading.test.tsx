import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading } from "./heading";

it("renders heading", () => {
  render(<Heading title="Hello" />);
  const headline = screen.getByText(/Hello/i);

  expect(headline).not.toBeNull();
});

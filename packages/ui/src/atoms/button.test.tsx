import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe('Button', () => {
    it('renders with the correct text', () => {
        // Arrange
        const buttonText = 'Click Me';

        // Act
        render(<Button text={buttonText} />);

        // Assert
        const buttonElement = screen.getByTestId('contact-button');
        expect(buttonElement).not.toBeNull();
    });
});

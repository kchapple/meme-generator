import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  test("handles input change", () => {
    // Arrange
    const handleChange = vi.fn();
    const mockValidate = vi.fn().mockImplementation(() => true);
    const initialValue = "initial";
    render(
      <TextInput
        testid="test-input"
        id="test"
        value={initialValue}
        placeholder="Test Placeholder"
        label="Test Label"
        validate={mockValidate}
        change={handleChange}
      />
    );

    // Act
    const input = screen.getByTestId("test-input");
    fireEvent.change(input, { target: { value: "new value" } });

    // Assert
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});

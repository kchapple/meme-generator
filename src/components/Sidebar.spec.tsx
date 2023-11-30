import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";
import { createTestMemeProperties } from "../fixtures";

describe("Sidebar", () => {
  test("renders all form elements", () => {
    // Arrange
    const testMeme = createTestMemeProperties();
    const setMemeMock = vi.fn();

    // Act
    render(<Sidebar meme={testMeme} setMeme={setMemeMock} />);

    // Assert
    expect(screen.getByTestId("url-input")).toBeInTheDocument();
    expect(screen.getByTestId("scale-input")).toBeInTheDocument();
    expect(screen.getByTestId("rotation-input")).toBeInTheDocument();
    expect(screen.getByTestId("mirror-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("topText-input")).toBeInTheDocument();
    expect(screen.getByTestId("bottomText-input")).toBeInTheDocument();
    expect(screen.getByTestId("color-input")).toBeInTheDocument();
  });

  test("handles change in mirror checkbox", () => {
    // Arrange
    const testMeme = createTestMemeProperties();
    const setMemeMock = vi.fn();

    render(<Sidebar meme={testMeme} setMeme={setMemeMock} />);

    // Act
    fireEvent.click(screen.getByTestId("mirror-checkbox"));

    // Assert
    expect(setMemeMock).toHaveBeenCalledTimes(1);
    expect(setMemeMock).toHaveBeenCalledWith(testMeme);
  });

  test("handles change in color picker", () => {
    // Arrange
    const testMeme = createTestMemeProperties();
    const setMemeMock = vi.fn();

    render(<Sidebar meme={testMeme} setMeme={setMemeMock} />);

    // Act
    fireEvent.change(screen.getByTestId("color-input"), {
      target: { value: testMeme.textColor },
    });

    // Assert
    expect(setMemeMock).toHaveBeenCalledTimes(1);
    expect(setMemeMock).toHaveBeenCalledWith(testMeme);
  });
});

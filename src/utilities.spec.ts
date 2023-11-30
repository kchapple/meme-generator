import { describe, test, assert } from "vitest";
import { computeTransformStyle } from "./utilities";

describe("computeTransformStyle", () => {
  test("returns the correct transform style for scale, rotation, and mirror", () => {
    // Arrange
    const scale = 150;
    const rotation = 45;
    const mirror = true;

    // Act
    const result = computeTransformStyle(scale, rotation, mirror);

    // Assert
    assert.equal(
      result,
      "scaleX(-1.5) scaleY(1.5) rotate(45deg)",
      "Should return the correct transform style"
    );
  });

  test("returns the correct transform style for scale and rotation without mirror", () => {
    // Arrange
    const scale = 100;
    const rotation = 90;
    const mirror = false;

    // Act
    const result = computeTransformStyle(scale, rotation, mirror);

    // Assert
    assert.equal(
      result,
      "scaleX(1) scaleY(1) rotate(90deg)",
      "Should return the correct transform style"
    );
  });
});

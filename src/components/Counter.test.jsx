// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { toMatchDiffSnapshot } from "snapshot-diff";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

// the component to test
import Counter from "./Counter";
expect.extend({ toMatchDiffSnapshot });
jest.mock("axios");
test("counter render", () => {
  // Arrange
  const { getByText, getAllByRole, getByRole, container, asFragment } = render(
    <Counter />
  );

  // Act
  fireEvent.click(getByText("Increament"));
  // Assert
  const increamentButton = getByText("Increament");
  const result = container.querySelector(".result");

  expect(increamentButton).toBeInTheDocument();
  expect(result.innerHTML).toBe("1");

  fireEvent.click(getByText("Increament"));
  expect(result.innerHTML).toBe("2");

  fireEvent.click(getByText("Decreament"));
  expect(result).toHaveTextContent("1");
});

// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { toMatchDiffSnapshot } from "snapshot-diff";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
import axiosMock from "axios";

// the component to test
import Fetch from "./Fetch";
expect.extend({ toMatchDiffSnapshot });
jest.mock("axios");
test("loads and displays greeting", async () => {
  // Arrange
  const url = "/greeting";
  const { getByText, getByRole, container, asFragment } = render(
    <Fetch url={url} />
  );
  const firstRender = asFragment();
  // Act
  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  fireEvent.click(getByText("Load Greeting"));

  // Wait until the mocked `get` request promise resolves and
  // the component calls setState and re-renders.
  // `waitForElement` waits until the callback doesn't throw an error
  expect(getByRole("button")).toHaveAttribute("disabled");
  expect(getByRole("button")).toHaveTextContent("Ok");

  const greetingTextNode = await waitForElement(() =>
    // getByRole throws an error if it cannot find an element
    getByRole("heading")
  );
  // Assert

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(getByRole("heading")).toHaveTextContent("hello there");
  expect(getByRole("button")).toHaveTextContent("Load Greeting");
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

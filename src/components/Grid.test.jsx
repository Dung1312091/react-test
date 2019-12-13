import React from "react";
import Grid from "./Grid";
import { render } from "@testing-library/react";

it("render childrens", () => {
  const { getByText, getByPlaceholderText } = render(
    <Grid>
      <h1>Content</h1>
      <input placeholder="username" type="submit" value="Send data" />
    </Grid>
  );
  const children = getByText("Content");
  const placeholder = getByPlaceholderText("username");
  expect(children).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
});

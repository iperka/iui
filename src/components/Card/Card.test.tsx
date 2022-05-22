import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  test("should render Card component", () => {
    render(<Card>Hello World</Card>);
  });

  test("should render Card with header component", () => {
    render(<Card header="Test">Hello World</Card>);
  });
});

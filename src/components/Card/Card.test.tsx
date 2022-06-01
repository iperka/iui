import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  test("should render Card component", () => {
    expect(render(<Card>Hello World</Card>)).toBeDefined();
  });
});

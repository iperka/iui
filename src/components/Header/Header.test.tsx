import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  test("should render Header component", () => {
    expect(expect(render(<Header label="Hello world!" />))).toBeDefined();
  });
});

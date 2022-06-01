import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("should render Input component", () => {
    expect(render(<Input type={"email"} />)).toBeDefined();
  });
});

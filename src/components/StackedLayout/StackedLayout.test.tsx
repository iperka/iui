import React from "react";
import { render } from "@testing-library/react";

import StackedLayout from "./StackedLayout";

describe("StackedLayout", () => {
  test("should render StackedLayout component", () => {
    expect(expect(render(<StackedLayout label="Hello world!" />)).toBeDefined();
  });
});

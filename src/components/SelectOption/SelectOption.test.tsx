import React from "react";
import { render } from "@testing-library/react";

import SelectOption from "./SelectOption";

describe("SelectOption", () => {
  test("should render SelectOption component", () => {
    expect(
      expect(render(<SelectOption value="test">Test</SelectOption>))
    ).toBeDefined();
  });
});

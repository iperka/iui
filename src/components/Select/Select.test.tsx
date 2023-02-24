import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";
import SelectOption from "../SelectOption";

describe("Select", () => {
  test("should render Select component", () => {
    expect(
      expect(
        render(
          <Select>
            <SelectOption value="test1">Test1</SelectOption>
            <SelectOption value="test2">Test2</SelectOption>
          </Select>
        )
      )
    ).toBeDefined();
  });
});

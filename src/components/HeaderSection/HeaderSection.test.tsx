import React from "react";
import { render } from "@testing-library/react";

import HeaderSection from "./HeaderSection";

describe("HeaderSection", () => {
  test("should render HeaderSection component", () => {
    render(<HeaderSection label="Hello world!" />);
  });
});

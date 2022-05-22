import React from "react";
import { render } from "@testing-library/react";

import ListContainer from "./ListContainer";

describe("ListContainer", () => {
  test("should render ListContainer component", () => {
    render(<ListContainer items={[]} />);
  });
});

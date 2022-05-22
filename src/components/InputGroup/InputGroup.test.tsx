import React from "react";
import { render } from "@testing-library/react";

import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  test("should render InputGroup component", () => {
    render(<InputGroup type={"text"} label="Hello world!" />);
  });
});

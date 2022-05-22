import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("should render Button component", () => {
    render(<Button label="Hello world!" />);
  });
});

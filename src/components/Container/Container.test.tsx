import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container";

describe("Container", () => {
  test("should render Container component", () => {
    render(<Container>Hello World</Container>);
  });
});

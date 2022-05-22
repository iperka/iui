import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  test("should render Label component", () => {
    render(<Label>Email</Label>);
  });
});

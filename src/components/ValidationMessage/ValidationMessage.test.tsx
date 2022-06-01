import React from "react";
import { render } from "@testing-library/react";

import ValidationMessage from "./ValidationMessage";

describe("ValidationMessage", () => {
  test("should render ValidationMessage component", () => {
    expect(
      render(
        <ValidationMessage
          errors={["Your password must be less than 4 characters."]}
        />
      )
    ).toBeDefined();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import HeaderSection from "./HeaderSection";

describe("HeaderSection", () => {
  test("should render HeaderSection component", () => {
    render(
      <HeaderSection
        header="Pricing"
        header2="Take control of your team."
        subtitle="Start building for free, then add a site plan to go live. Account plans unlock additional features."
      />
    );
  });
});

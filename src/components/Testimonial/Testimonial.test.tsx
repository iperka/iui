import React from "react";
import { render } from "@testing-library/react";

import Testimonial from "./Testimonial";

describe("Testimonial", () => {
  test("should render Testimonial component", () => {
    expect(
      render(
        <Testimonial
          content="I love the product!"
          author={{
            name: "Max",
            role: "CEO",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          }}
        />
      )
    ).toBeDefined();
  });
});

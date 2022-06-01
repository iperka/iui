---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---
import React from "react";
import { render } from "@testing-library/react";

import <%= h.changeCase.pascal(name) %> from "./<%= h.changeCase.pascal(name) %>";

describe("<%= h.changeCase.pascal(name) %>", () => {
  test("should render <%= h.changeCase.pascal(name) %> component", () => {
    expect(render(<<%= h.changeCase.pascal(name) %> label="Hello world!" />)).toBeDefined();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import { Button } from "..";

describe("ButtonGroup", () => {
  test("should render ButtonGroup component", () => {
    expect(
      render(
        <ButtonGroup variant="responsive">
          <Button>Test1</Button>
          <Button>Test2</Button>
          <Button>Test3</Button>
        </ButtonGroup>
      )
    ).toBeDefined();
  });
});

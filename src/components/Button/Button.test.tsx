import { render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button", () => {
  test("should render Button component", () => {
    expect(render(<Button>Test</Button>)).toBeDefined();
  });

  test("should render children", () => {
    const component = render(<Button>Hello World!</Button>);
    const instance = component.baseElement;
    const button: any = instance.querySelector("button");
    expect(button.textContent).toBe("Hello World!");
  });
});

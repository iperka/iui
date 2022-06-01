import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("should render Input component", () => {
    expect(render(<Input type={"email"} />)).toBeDefined();
  });

  test("should set placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input type={"email"} placeholder={"Email"} />
    );
    expect(getByPlaceholderText("Email")).toBeDefined();
  });

  test("should set default value", () => {
    const { getByDisplayValue } = render(
      <Input type={"email"} defaultValue="foo" />
    );
    expect(getByDisplayValue("foo")).toBeDefined();
  });

  ["email", "password", "text"].forEach((type) => {
    test(`should set type for ${type} input`, () => {
      const { container } = render(<Input type={type} />);
      expect(container.querySelector(`input[type=${type}]`)).toBeDefined();
    });
  });

  test("should set aria attributes", () => {
    const { container } = render(
      <Input
        type={"email"}
        aria-label="Email"
        aria-labelledby="label"
        aria-describedby="description"
      />
    );
    expect(container.querySelector(`input[aria-label="Email"]`)).toBeDefined();
    expect(
      container.querySelector(`input[aria-labelledby="label"]`)
    ).toBeDefined();
    expect(
      container.querySelector(`input[aria-describedby="description"]`)
    ).toBeDefined();
  });

  test("should set autocomplete", () => {
    const { container } = render(<Input type={"email"} autoComplete={"off"} />);
    expect(container.querySelector(`input[autocomplete="off"]`)).toBeDefined();
  });
});

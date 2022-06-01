import React from "react";
import { render } from "@testing-library/react";

import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  test("should render InputGroup component", () => {
    expect(
      render(<InputGroup type={"text"} label="Hello world!" />)
    ).toBeDefined();
  });

  test("should set label", () => {
    const { getByText } = render(
      <InputGroup type={"text"} label="Hello world!" />
    );
    expect(getByText("Hello world!")).toBeDefined();
  });

  test("should set placeholder", () => {
    const { getByPlaceholderText } = render(
      <InputGroup type={"text"} label="foo" placeholder={"Hello world!"} />
    );
    expect(getByPlaceholderText("Hello world!")).toBeDefined();
  });

  test("should set default value", () => {
    const { getByDisplayValue } = render(
      <InputGroup type={"text"} label="foo" defaultValue="Hello world!" />
    );
    expect(getByDisplayValue("Hello world!")).toBeDefined();
  });

  ["email", "password", "text"].forEach((type) => {
    test(`should set type for ${type} input`, () => {
      const { container } = render(
        <InputGroup type={type} label="foo" defaultValue="Hello world!" />
      );
      expect(container.querySelector(`input[type=${type}]`)).toBeDefined();
    });
  });

  test("should show validation errors", () => {
    const { getByText } = render(
      <InputGroup
        type={"text"}
        label="foo"
        defaultValue="Hello world!"
        errors={["Hello world!"]}
      />
    );
    expect(getByText("Hello world!")).toBeDefined();
  });
});

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

  const variants = {
    primary: "bg-primary-600",
    secondary: "bg-primary-100",
    white: "bg-white",
  };

  const sizes = {
    small: "px-2.5 py-1.5 text-xs font-medium",
    medium: "px-4 py-2 text-sm font-medium",
    large: "px-6 py-3 text-base font-medium",
  };

  Object.keys(variants).forEach((variant: any) => {
    const variantClasses = (variants as any)[variant];
    test(`should apply ${variant} CSS classes`, () => {
      const component = render(<Button variant={variant}>Test</Button>);
      const instance = component.baseElement;
      const button: any = instance.querySelector("button");
      expect(button).toHaveClass(variantClasses);
    });

    Object.keys(sizes).forEach((size: any) => {
      const sizeClasses = (sizes as any)[size];
      test(`should apply ${size} CSS classes`, () => {
        const component = render(
          <Button variant={variant} size={size}>
            Test
          </Button>
        );
        const instance = component.baseElement;
        const button: any = instance.querySelector("button");
        expect(button).toHaveClass(sizeClasses);
        expect(button).toHaveClass(variantClasses);
      });
    });
  });
});

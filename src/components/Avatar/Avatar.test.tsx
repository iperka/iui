import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./Avatar";

describe("Avatar", () => {
  test("should render Avatar component", () => {
    render(<Avatar initials="TS" />);
  });

  test("should warn in console if length of initials is invalid", () => {
    console.warn = jest.fn();
    render(<Avatar initials="TTT" />);
    expect(console.warn).toHaveBeenCalledWith(
      'Avatar: Initials "TTT" are too long!'
    );
  });

  const sizes = {
    small: { avatar: "h-8 w-8", status: "h-2 w-2" },
    medium: { avatar: "h-12 w-12", status: "h-3 w-3" },
    large: { avatar: "h-16 w-16", status: "h-4 w-4" },
  };

  Object.keys(sizes).forEach((size: any) => {
    const { avatar, status } = (sizes as any)[size];

    test(`should apply ${size} CSS class when using initials`, () => {
      const { container } = render(
        <Avatar initials="TS" size={size} status="online" />
      );
      expect(container.querySelector(".rounded-full")).toHaveClass(avatar);
      expect(container.querySelector(".ring-white")).toHaveClass(status);
    });

    test(`should apply ${size} CSS class when using image`, () => {
      const { container } = render(
        <Avatar url="" size={size} status="online" />
      );
      expect(container.querySelector(".rounded-full")).toHaveClass(avatar);
      expect(container.querySelector(".ring-white")).toHaveClass(status);
    });

    test(`should apply ${size} CSS class when using image`, () => {
      const { container } = render(
        <Avatar url="" size={size} status="online" />
      );
      expect(container.querySelector(".rounded-full")).toHaveClass(avatar);
      expect(container.querySelector(".ring-white")).toHaveClass(status);
    });
  });

  const statuses = {
    online: "bg-green-500",
    offline: "bg-gray-300",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };
  
  Object.keys(statuses).forEach((status: any) => {
    const statusClass = (statuses as any)[status];

    test(`should apply ${status} CSS class`, () => {
      const { container } = render(
        <Avatar initials="TS" size="medium" status={status} />
      );
      expect(container.querySelector(".ring-white")).toHaveClass(statusClass);
    });
  });
});

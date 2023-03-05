import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { render } from "@testing-library/react";
import React from "react";
import Sidenav from "./Sidenav";

describe("Sidenav", () => {
  test("should render Sidenav component", () => {
    expect(
      render(
        <Sidenav
          customLink={(href, children) => (
            <div onClick={() => alert(`Navigate to ${href}...`)}>
              {children}
            </div>
          )}
          items={[
            {
              label: "Dashboard",
              icon: HomeIcon as any,
              href: "#",
              current: true,
            },
            {
              label: "Team",
              href: "#",
              icon: UsersIcon as any,
              current: false,
            },
            {
              label: "Projects",
              href: "#",
              icon: MapIcon as any,
              current: false,
            },
            {
              label: "Calendar",
              href: "#",
              icon: CalendarIcon as any,
              current: false,
            },
          ]}
          secondaryItems={[
            { label: "Profile", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Log out", href: "#" },
          ]}
          secondaryTitle="Test"
        />
      )
    ).toBeDefined();
  });
});

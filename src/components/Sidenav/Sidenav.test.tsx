import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { render } from "@testing-library/react";
import React from "react";
import Sidenav from "./Sidenav";

describe("Sidenav", () => {
  test("should render Sidenav component", () => {
    render(
      <Sidenav
        customLink={(href, children) => (
          <div onClick={() => alert(`Navigate to ${href}...`)}>{children}</div>
        )}
        items={[
          { label: "Dashboard", icon: HomeIcon, href: "#", current: true },
          { label: "Team", href: "#", icon: UsersIcon, current: false },
          { label: "Projects", href: "#", icon: MapIcon, current: false },
          { label: "Calendar", href: "#", icon: CalendarIcon, current: false },
        ]}
        secondaryItems={[
          { label: "Profile", href: "#" },
          { label: "Settings", href: "#" },
          { label: "Log out", href: "#" },
        ]}
        secondaryTitle="Test"
      />
    );
  });
});

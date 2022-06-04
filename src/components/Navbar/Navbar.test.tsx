import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render Navbar component", () => {
    expect(
      render(
        <Navbar
          customLink={(href, children) => (
            <div onClick={() => alert(`Navigate to ${href}...`)}>
              {children}
            </div>
          )}
          items={[
            { label: "Dashboard", href: "#", current: true },
            { label: "Team", href: "#", current: false },
            { label: "Projects", href: "#", current: false },
            { label: "Calendar", href: "#", current: false },
          ]}
          userMenuItems={[
            { label: "Profile", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Log out", href: "#" },
          ]}
          avatar={{ initials: "TS" }}
        />
      )
    ).toBeDefined();
    expect(screen.queryByText("TS")).not.toBeNull();
  });

  test("should hide avatar when provided `avatarHidden` property", async () => {
    render(
      <Navbar
        customLink={(href, children) => (
          <div onClick={() => alert(`Navigate to ${href}...`)}>{children}</div>
        )}
        items={[
          { label: "Dashboard", href: "#", current: true },
          { label: "Team", href: "#", current: false },
          { label: "Projects", href: "#", current: false },
          { label: "Calendar", href: "#", current: false },
        ]}
        userMenuItems={[
          { label: "Profile", href: "#" },
          { label: "Settings", href: "#" },
          { label: "Log out", href: "#" },
        ]}
        avatar={{ initials: "TS" }}
        avatarHidden
      />
    );

    // Check if element with text TS exists
    expect(screen.queryByText("TS")).toBeNull();
  });
});

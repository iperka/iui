import React from "react";
import { render } from "@testing-library/react";

import StackedLayout from "./StackedLayout";

describe("StackedLayout", () => {
  test("should render StackedLayout component", () => {
    expect(
      render(
        <StackedLayout
          title="Hello world!"
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
        >
          {" "}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
        </StackedLayout>
      )
    ).toBeDefined();
  });
});

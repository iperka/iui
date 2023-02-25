import React from "react";
import { render } from "@testing-library/react";

import PrivacyNotice from "./PrivacyNotice";

describe("PrivacyNotice", () => {
  test("should render PrivacyNotice component", () => {
    expect(
      expect(
        render(
          <PrivacyNotice
            notice={
              <>
                This website uses cookies to supplement a balanced diet and
                provide a much deserved reward to the senses after consuming
                bland but nutritious meals. Accepting our cookies is optional
                but recommended, as they are delicious. See our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  cookie policy
                </a>
                .
              </>
            }
            onAcceptAll={() => {
              alert("You accepted all cookies");
            }}
            onRejectAll={() => {
              alert("You rejected all cookies");
            }}
          />
        )
      )
    ).toBeDefined();
  });
});

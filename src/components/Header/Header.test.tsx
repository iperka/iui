import React from "react";
import { render } from "@testing-library/react";
import logo from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

import Header from "./Header";

describe("Header", () => {
  test("should render Header component", () => {
    expect(
      expect(
        render(
          <Header
            companyName="iperka"
            logoSrc={logo as string}
            logoSrcDark={logoDark as string}
            logoAlt="iperka"
            navigation={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "About",
                href: "/about",
              },
              {
                label: "Contact",
                href: "/contact",
              },
            ]}
          />
        )
      )
    ).toBeDefined();
  });

  test("should render Header like snapshot", () => {
    const { container } = render(
      <Header
        companyName="iperka"
        logoSrc={logo as string}
        logoSrcDark={logoDark as string}
        logoAlt="iperka"
        navigation={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About",
            href: "/about",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

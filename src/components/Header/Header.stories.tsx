import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import logo from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

import Header, { HeaderProps } from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  companyName: "iperka",
  logoSrc: logo as string,
  logoSrcDark: logoDark as string,
  logoAlt: "iperka",
  navigation: [
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
  ],
};

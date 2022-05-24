import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar, { NavbarProps } from "./Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args: NavbarProps) => (
  <Navbar {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  customLink: (href, children) => (
    <div onClick={() => alert(`Navigate to ${href}...`)}>{children}</div>
  ),
  items: [
    { label: "Dashboard", href: "#", current: true },
    { label: "Team", href: "#", current: false },
    { label: "Projects", href: "#", current: false },
    { label: "Calendar", href: "#", current: false },
  ],
  userMenuItems: [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Log out", href: "#" },
  ],
};

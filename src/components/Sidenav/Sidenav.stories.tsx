import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Sidenav, { SidenavProps } from "./Sidenav";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Sidenav",
  component: Sidenav,
} as ComponentMeta<typeof Sidenav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidenav> = (args: SidenavProps) => (
  <Sidenav {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  customLink: (href, children) => (
    <div onClick={() => alert(`Navigate to ${href}...`)}>{children}</div>
  ),
  items: [
    { label: "Dashboard", icon: HomeIcon, href: "#", current: true },
    { label: "Team", href: "#", icon: UsersIcon, current: false },
    { label: "Projects", href: "#", icon: MapIcon, current: false },
    { label: "Calendar", href: "#", icon: CalendarIcon, current: false },
  ],
  secondaryItems: [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Log out", href: "#" },
  ],
  secondaryTitle: "Test",
};

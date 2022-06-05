import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StackedLayout, { StackedLayoutProps } from "./StackedLayout";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/StackedLayout",
  component: StackedLayout,
} as ComponentMeta<typeof StackedLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackedLayout> = (
  args: StackedLayoutProps
) => <StackedLayout {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Hello world!",
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
  children: (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </div>
  ),
};

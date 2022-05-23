import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderSection, { HeaderSectionProps } from "./HeaderSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/HeaderSection",
  component: HeaderSection,
} as ComponentMeta<typeof HeaderSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderSection> = (args: HeaderSectionProps) => <HeaderSection {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello world!",
};


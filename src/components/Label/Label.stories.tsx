import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label, { LabelProps } from "./Label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Email:",
};

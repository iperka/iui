import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input, { InputProps } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: "",
  defaultValue: "Test",
  disabled: false,
};

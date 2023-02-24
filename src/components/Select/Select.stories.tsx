import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select, { SelectProps } from "./Select";
import SelectOption from "../SelectOption";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args: SelectProps) => (
  <Select {...args}>
    <SelectOption value="test1">Test1</SelectOption>
    <SelectOption value="test2">Test2</SelectOption>
  </Select>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

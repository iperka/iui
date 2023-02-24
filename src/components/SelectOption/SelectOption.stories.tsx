import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectOption, { SelectOptionProps } from "./SelectOption";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/SelectOption",
  component: SelectOption,
} as ComponentMeta<typeof SelectOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectOption> = (args: SelectOptionProps) => <SelectOption {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello world!",
};


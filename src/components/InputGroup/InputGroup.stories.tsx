import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputGroup, { InputGroupProps } from "./InputGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/InputGroup",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args: InputGroupProps) => (
  <InputGroup {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello world!",
  type: "text",
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  label: "Hello world!",
  type: "text",
  errors: ["Your password must be less than 4 characters."],
};

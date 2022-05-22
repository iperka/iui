import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Hello world!",
  variant: "primary",
  size: "medium",
  disabled: false,
};

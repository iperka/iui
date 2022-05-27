import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ValidationMessage, { ValidationMessageProps } from "./ValidationMessage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/ValidationMessage",
  component: ValidationMessage,
} as ComponentMeta<typeof ValidationMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValidationMessage> = (
  args: ValidationMessageProps
) => <ValidationMessage {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  errors: [
    "Your password must be less than 4 characters.",
    "Your password must be less than 4 characters.",
  ],
};

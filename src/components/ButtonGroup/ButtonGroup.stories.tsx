import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";
import { Button } from "../";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (
  args: ButtonGroupProps
) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: [
    <Button key={0}>Test1</Button>,
    <Button key={1}>Test2</Button>,
    <Button key={2}>Test3</Button>,
  ],
};

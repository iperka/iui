import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container, { ContainerProps } from "./Container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args: ContainerProps) => (
  <Container {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Hello world!",
};

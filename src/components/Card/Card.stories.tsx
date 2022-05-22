import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card, { CardProps } from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Hello world!",
};

export const WithHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithHeader.args = {
  children: "Hello world!",
  header: "Header",
};

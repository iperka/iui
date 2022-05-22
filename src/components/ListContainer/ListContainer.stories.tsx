import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListContainer, { ListContainerProps } from "./ListContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/ListContainer",
  component: ListContainer,
} as ComponentMeta<typeof ListContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListContainer> = (
  args: ListContainerProps
) => <ListContainer {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [<p>Test1</p>, <p>Test2</p>, <p>Test3</p>],
};

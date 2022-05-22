---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import <%= h.changeCase.pascal(name) %>, { <%= h.changeCase.pascal(name) %>Props } from "./<%= h.changeCase.pascal(name) %>";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/<%= h.changeCase.pascal(name) %>",
  component: <%= h.changeCase.pascal(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = (args: <%= h.changeCase.pascal(name) %>Props) => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello world!",
};


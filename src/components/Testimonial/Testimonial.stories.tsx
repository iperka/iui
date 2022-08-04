import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Testimonial, { TestimonialProps } from "./Testimonial";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Testimonial",
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Testimonial> = (
  args: TestimonialProps
) => <Testimonial {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  content: "I love the product!",
  author: {
    name: "Max",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

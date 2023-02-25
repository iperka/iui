import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrivacyNotice, { PrivacyNoticeProps } from "./PrivacyNotice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/PrivacyNotice",
  component: PrivacyNotice,
} as ComponentMeta<typeof PrivacyNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrivacyNotice> = (
  args: PrivacyNoticeProps
) => <PrivacyNotice {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  notice: (
    <>
      This website uses cookies to supplement a balanced diet and provide a much
      deserved reward to the senses after consuming bland but nutritious meals.
      Accepting our cookies is optional but recommended, as they are delicious.
      See our{" "}
      <a href="#" className="font-semibold text-indigo-600">
        cookie policy
      </a>
      .
    </>
  ),
  onAcceptAll: () => {
    alert("You accepted all cookies");
  },
  onRejectAll: () => {
    alert("You rejected all cookies");
  },
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CalendarDay, { CalendarDayProps } from "./CalendarDay";
import moment from "moment";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/CalendarDay",
  component: CalendarDay,
} as ComponentMeta<typeof CalendarDay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CalendarDay> = (
  args: CalendarDayProps
) => <CalendarDay {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  start: moment("2022-01-01 17:00:00"),
  end: moment("2022-01-01 23:00:00"),
  interval: 15,
  events: [
    {
      summary: "My Event",
      start: moment("2022-01-01 17:00:00"),
      end: moment("2022-01-01 17:30:00"),
      onPress: () => {
        alert("Hello");
      },
      color: "blue",
    },
    {
      summary: "My Event 2",
      start: moment("2022-01-01 19:00:00"),
      end: moment("2022-01-01 19:30:00"),
    },
  ],
};

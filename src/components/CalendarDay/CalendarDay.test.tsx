import React from "react";
import { render } from "@testing-library/react";

import CalendarDay from "./CalendarDay";
import moment from "moment";

describe("CalendarDay", () => {
  test("should render CalendarDay component", () => {
    expect(
      render(
        <CalendarDay
          start={moment("2022-01-01 17:00:00")}
          end={moment("2022-01-01 23:00:00")}
          interval={15}
          events={[
            {
              summary: "My Event",
              start: moment("2022-01-01 17:00:00"),
              end: moment("2022-01-01 17:30:00"),
            },
          ]}
        />
      )
    ).toBeDefined();
  });

  test("should emit event when calendar event clicked", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <CalendarDay
        start={moment("2022-01-01 17:00:00")}
        end={moment("2022-01-01 23:00:00")}
        interval={15}
        events={[
          {
            summary: "My Event",
            start: moment("2022-01-01 17:00:00"),
            end: moment("2022-01-01 17:30:00"),
            onPress,
          },
        ]}
      />
    );

    const event = getByText("My Event");
    event.click();

    expect(onPress).toHaveBeenCalled();
  });

  test("should throw exception when invalid interval have been provided", () => {
    expect(() => {
      render(
        <CalendarDay
          start={moment("2022-01-01 17:00:00")}
          end={moment("2022-01-01 23:00:00")}
          interval={-1}
          events={[
            {
              summary: "My Event",
              start: moment("2022-01-01 17:00:00"),
              end: moment("2022-01-01 17:30:00"),
            },
          ]}
        />
      );
    }).toThrowError();

    expect(() => {
      render(
        <CalendarDay
          start={moment("2022-01-01 17:00:00")}
          end={moment("2022-01-01 23:00:00")}
          interval={4}
          events={[
            {
              summary: "My Event",
              start: moment("2022-01-01 17:00:00"),
              end: moment("2022-01-01 17:30:00"),
            },
          ]}
        />
      );
    }).toThrowError();
  });

  test("should throw exception when invalid dates have been proviced", () => {
    expect(() => {
      render(
        <CalendarDay
          start={moment("2022-01-02 17:00:00")}
          end={moment("2022-01-01 23:00:00")}
          interval={15}
          events={[
            {
              summary: "My Event",
              start: moment("2022-01-01 17:00:00"),
              end: moment("2022-01-01 17:30:00"),
            },
          ]}
        />
      );
    }).toThrowError();

    expect(() => {
      render(
        <CalendarDay
          start={moment("2022-01-02 17:00:00")}
          end={moment("2021-01-01 23:00:00")}
          interval={15}
          events={[
            {
              summary: "My Event",
              start: moment("2022-01-01 17:00:00"),
              end: moment("2022-01-01 17:30:00"),
            },
          ]}
        />
      );
    }).toThrowError();
  });
});

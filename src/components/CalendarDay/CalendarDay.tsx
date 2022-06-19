import classNames from "classnames";
import moment from "moment";
import { Moment } from "moment";
import React from "react";
import "./CalendarDay.scss";
import { getGridRowForEvent } from "./helpers";

/**
 * Interface describing a calendar event.
 *
 * @author Michael Beutler
 * @version 1.0.2
 */
export interface Event<T> {
  start: Moment;
  end: Moment;
  summary: string;
  color?:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "orange"
    | "purple"
    | "pink"
    | "grey";
  onPress?: (event: Event<T>) => void;
  metadata?: T;
}

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
  start: Moment;
  end: Moment;
  interval?: number; // Step in minutes
  events: Event<any>[];
}

/**
 * ## CalendarDay Component
 *
 * CalendarDay component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <CalendarDay
 *    start={moment("2022-01-01 17:00:00")}
 *    end={moment("2022-01-01 23:00:00")}
 *    interval={15}
 *    events={[
 *      {
 *        summary: "My Event",
 *        start: moment("2022-01-01 17:00:00"),
 *        end: moment("2022-01-01 17:30:00"),
 *        onPress: (event: Event) => console.log("Event: ", event),
 *        color: "blue"
 *      },
 *    ]}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.2
 * @param {CalendarDayProps} props Component properties.
 * @returns React functional component.
 */
const CalendarDay: React.FC<CalendarDayProps> = ({
  start,
  end,
  interval = 15,
  events,
  className,
  ...rest
}) => {
  if (end.isBefore(start)) {
    throw new Error("End date must be after start date.");
  }

  if (interval <= 5) {
    throw new Error("Interval must be greater or equal to 5.");
  }

  // Check if interval is a multiple of 5
  if (interval % 5 !== 0) {
    throw new Error("Interval must be a multiple of 5.");
  }

  if (interval < 15) {
    console.warn(
      "Interval is less than 15 minutes. Consider increasing interval."
    );
  }

  // Calculate the number of rows and populate the grid
  const timeline: Moment[] = [];
  timeline.push(start);
  for (let i = 1; i < end.diff(start, "minutes") / interval - 1; i++) {
    timeline.push(moment(start).add(interval * i, "minutes"));
  }
  timeline.push(end);

  return (
    <div className={classNames("flex w-full flex-auto", className)} {...rest}>
      <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
      <div className="grid flex-auto grid-cols-1 grid-rows-1">
        {/* Horizontal lines */}
        <div
          className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
          style={{
            gridTemplateRows: `repeat(${timeline.length}, minmax(3.5rem, 1fr))`,
          }}
        >
          <div className="row-end-1 h-7"></div>
          {timeline.map((time) => (
            <div key={time.format("HH:mm")}>
              <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                {time.format("HH:mm")}
              </div>
            </div>
          ))}
        </div>

        <ol
          className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
          style={{
            gridTemplateRows: `1.75rem repeat(${timeline.length}, minmax(0, 1fr)) auto`,
          }}
        >
          {events.map((event, i) => (
            <li
              key={i}
              className="relative mt-px flex"
              style={{ gridRow: getGridRowForEvent(event, timeline, interval) }}
            >
              <div
                onClick={() => event.onPress && event.onPress(event)}
                className={classNames(
                  "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5",
                  event.color === "red" && "bg-red-50 hover:bg-red-100",
                  event.color === "green" && "bg-green-50 hover:bg-green-100",
                  event.color === "blue" && "bg-blue-50 hover:bg-blue-100",
                  event.color === "yellow" &&
                    "bg-yellow-50 hover:bg-yellow-100",
                  event.color === "orange" &&
                    "bg-orange-50 hover:bg-orange-100",
                  event.color === "purple" &&
                    "bg-purple-50 hover:bg-purple-100",
                  event.color === "pink" && "bg-pink-50 hover:bg-pink-100",
                  event.color === "grey" && "bg-gray-50 hover:bg-gray-100"
                )}
              >
                <p
                  className={classNames(
                    "order-1 font-semibold",
                    event.color === "red" && "text-red-700",
                    event.color === "green" && "text-green-700",
                    event.color === "blue" && "text-blue-700",
                    event.color === "yellow" && "text-yellow-700",
                    event.color === "orange" && "text-orange-700",
                    event.color === "purple" && "text-purple-700",
                    event.color === "pink" && "text-pink-700",
                    event.color === "grey" && "text-gray-700"
                  )}
                >
                  {event.summary}
                </p>
                <p
                  className={classNames(
                    event.color === "red" &&
                      "text-red-500 group-hover:text-red-700",
                    event.color === "green" &&
                      "text-green-500 group-hover:text-green-700",
                    event.color === "blue" &&
                      "text-blue-500 group-hover:text-blue-700",
                    event.color === "yellow" &&
                      "text-yellow-500 group-hover:text-yellow-700",
                    event.color === "orange" &&
                      "text-orange-500 group-hover:text-orange-700",
                    event.color === "purple" &&
                      "text-purple-500 group-hover:text-purple-700",
                    event.color === "pink" &&
                      "text-pink-500 group-hover:text-pink-700",
                    event.color === "grey" &&
                      "text-gray-500 group-hover:text-gray-700"
                  )}
                >
                  <time dateTime={event.start.format()}>
                    {event.start.format("HH:mm")} - {event.end.format("HH:mm")}
                  </time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CalendarDay;

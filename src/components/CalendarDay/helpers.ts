import { Moment } from "moment";
import { Event } from "./CalendarDay";

/**
 * Helper functions for the calendar day component.
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param event Calendar event.
 * @param timeline Current timeline.
 * @returns GridRow style definitions.
 */
export const getGridRowForEvent = (
  event: Event<any>,
  timeline: Moment[]
): string => {
  const start = Math.floor(
    (event.start.diff(timeline[0], "minutes") + 1) / (timeline.length / 2)
  );
  const duration = Math.floor(
    (event.end.diff(event.start, "minutes") + 1) / (timeline.length / 2)
  );

  return `${start + 2} / span ${duration}`;
};

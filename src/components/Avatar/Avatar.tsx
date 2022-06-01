import classNames from "classnames";
import React from "react";
import "./Avatar.scss";

const getSizeClassesForAvatar = (
  size: "small" | "medium" | "large"
): string => {
  switch (size) {
    case "small":
      return "h-8 w-8";

    case "large":
      return "h-16 w-16";

    case "medium":
    default:
      return "h-12 w-12";
  }
};

const getSizeClassesForStatus = (
  size: "small" | "medium" | "large"
): string => {
  switch (size) {
    case "small":
      return "h-2 w-2";

    case "large":
      return "h-4 w-4";

    case "medium":
    default:
      return "h-3 w-3";
  }
};

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface AvatarProps {
  url?: string;
  status?: "online" | "offline" | "busy" | "away";
  initials?: string;
  size?: "small" | "medium" | "large";
}

/**
 * ## Avatar Component
 *
 * Avatar component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Avatar label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {AvatarProps} props Component properties.
 * @returns React functional component.
 */
const Avatar: React.FC<AvatarProps> = ({
  url,
  size = "medium",
  status,
  initials,
  ...rest
}) => {
  if (initials && initials.length > 2) {
    console.warn(`Avatar: Initials "${initials}" are too long!`);
  }

  const StatusIndicator: React.FC = () =>
    status ? (
      <span
        className={classNames(
          "absolute top-0 right-0 block rounded-full ring-2 ring-white",
          getSizeClassesForStatus(size),
          status === "online"
            ? "bg-green-500"
            : status === "busy"
            ? "bg-red-500"
            : status === "away"
            ? "bg-yellow-500"
            : status === "offline"
            ? "bg-gray-300"
            : undefined
        )}
      />
    ) : (
      <></>
    );

  if (!url && !initials) {
    return (
      <span
        className={classNames(
          "inline-block relative",
          getSizeClassesForAvatar(size)
        )}
      >
        <span
          className={classNames(
            "inline-block rounded-full overflow-hidden bg-gray-100",
            getSizeClassesForAvatar(size)
          )}
        >
          <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <StatusIndicator />
      </span>
    );
  }

  if (!url) {
    return (
      <span className="inline-block relative">
        <span
          className={classNames(
            "inline-flex items-center justify-center rounded-full bg-gray-500",
            getSizeClassesForAvatar(size)
          )}
        >
          <span
            className={classNames(
              "font-medium leading-none text-white",
              size === "medium" && "text-lg",
              size === "small" && "text-sm",
              size === "large" && "text-xl"
            )}
          >
            {initials}
          </span>
        </span>
        <StatusIndicator />
      </span>
    );
  }

  return (
    <span className="inline-block relative">
      <img
        className={classNames("rounded-full", getSizeClassesForAvatar(size))}
        src={url}
        alt={initials}
        draggable={false}
      />
      <StatusIndicator />
    </span>
  );
};

export default Avatar;

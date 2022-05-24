import React from "react";
import classNames from "classnames";

const getVariantClasses = (
  variant: "primary" | "secondary" | "white"
): string => {
  switch (variant) {
    case "secondary":
      return "border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500 disabled:opacity-50 disabled:hover:bg-primary-100 disabled:cursor-not-allowed";

    case "white":
      return "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500 disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed";

    case "primary":
    default:
      return "border border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 disabled:opacity-50 disabled:hover:bg-primary-600 disabled:cursor-not-allowed";
  }
};

const getSizeClasses = (size: "small" | "medium" | "large"): string => {
  switch (size) {
    case "small":
      return "px-2.5 py-1.5 text-xs font-medium";

    case "large":
      return "px-6 py-3 text-base font-medium";

    case "medium":
    default:
      return "px-4 py-2 text-sm font-medium ";
  }
};

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.1
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large";
}

/**
 * ## Button Component
 *
 * Button component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Button variant="primary" size="medium" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ButtonProps} props Component properties.
 * @returns React functional component.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center",
        getVariantClasses(variant),
        getSizeClasses(size),
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

import classNames from "classnames";
import React from "react";
import "./Label.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

/**
 * ## Label Component
 *
 * Label component for iperka user interface.
 * This component is mainly styled with the tailwindcss forms plugin.
 *
 * ### Example:
 *
 * ```tsx
 * <Label>Email</Label>
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {LabelProps} props Component properties.
 * @returns React functional component.
 */
const Label: React.FC<LabelProps> = ({ children, className, ...rest }) => {
  return (
    <label
      className={classNames(
        "block text-sm font-medium text-gray-700 dark:text-gray-200",
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;

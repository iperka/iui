import classNames from "classnames";
import React from "react";
import "./Select.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface SelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

/**
 * ## Select Component
 *
 * Select component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Select>
 *  <SelectOption></SelectOption>
 * </Select>
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {SelectProps} props Component properties.
 * @returns React functional component.
 */
const Select: React.FC<SelectProps> = ({ className, children, ...rest }) => {
  return (
    <select
      className={classNames(
        "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white disabled:bg-gray-200 disabled:opacity-50",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select;

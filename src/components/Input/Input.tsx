import classNames from "classnames";
import React from "react";
import "./Input.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
}

/**
 * ## Input Component
 *
 * Input component for iperka user interface.
 * This component is mainly styled with the tailwindcss forms plugin.
 *
 * ### Example:
 *
 * ```tsx
 * <Input type="email" placeholder="max.muster@iperka.com" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {InputProps} props Component properties.
 * @returns React functional component.
 */
const Input: React.FC<InputProps> = ({ className, type = "text", ...rest }) => {
  return (
    <input
      type={type}
      className={classNames(
        "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white disabled:bg-gray-200 disabled:opacity-50",
        className
      )}
      {...rest}
    />
  );
};

export default Input;

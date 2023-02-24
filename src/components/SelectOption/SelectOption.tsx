import classNames from "classnames";
import React from "react";
import "./SelectOption.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface SelectOptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {
  children: React.ReactNode;
  value: string;
}

/**
 * ## SelectOption Component
 *
 * SelectOption component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <SelectOption label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {SelectOptionProps} props Component properties.
 * @returns React functional component.
 */
const SelectOption: React.FC<SelectOptionProps> = ({
  children,
  value,
  ...rest
}) => {
  return (
    <option {...rest} value={value}>
      {children}
    </option>
  );
};

export default SelectOption;

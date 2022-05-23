import React from "react";
import { Input, Label } from "../";
import "./InputGroup.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface InputGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type: React.HTMLInputTypeAttribute;
  disabled?: boolean;
}

/**
 * ## InputGroup Component
 *
 * InputGroup component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <InputGroup label="Hello world!" type="text" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {InputGroupProps} props Component properties.
 * @returns React functional component.
 */
const InputGroup: React.FC<InputGroupProps> = ({
  label,
  disabled,
  type,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input {...rest} type={type} disabled={disabled} />
    </div>
  );
};

export default InputGroup;

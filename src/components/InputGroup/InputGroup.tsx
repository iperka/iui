import React from "react";
import { Input, Label } from "../";
import "./InputGroup.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface InputGroupProps {
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
 * <InputGroup label="Hello world!" />
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
  ...rest
}) => {
  return (
    <div {...rest}>
      <Label>{label}</Label>
      <Input type={type} disabled={disabled} />
    </div>
  );
};

export default InputGroup;

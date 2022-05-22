import React from "react";
import "./Button.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface ButtonProps {
  label: string;
}

/**
 * ## Button Component
 * 
 * Button component for iperka user interface.
 *
 * ### Example:
 * 
 * ```tsx
 * <Button label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ButtonProps} props Component properties.
 * @returns React functional component.
 */
const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};

export default Button;

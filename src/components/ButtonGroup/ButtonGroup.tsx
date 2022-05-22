import classNames from "classnames";
import React from "react";
import "./ButtonGroup.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "responsive" | "full";
  children: React.ReactNode;
}

/**
 * ## ButtonGroup Component
 *
 * ButtonGroup component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <ButtonGroup variant="responsive">
 *   <Button>Test1</Button>
 *   <Button>Test2</Button>
 *   <Button>Test3</Button>
 * </ButtonGroup>
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ButtonGroupProps} props Component properties.
 * @returns React functional component.
 */
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = "responsive",
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "w-full flex items-stretch gap-2",
        variant === "responsive" && "justify-end flex-col md:flex-row",
        variant === "full" && "justify-evenly",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;

import classNames from "classnames";
import React from "react";
import "./Container.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

/**
 * ## Container Component
 *
 * Container component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Container>
 *   <p>Hello world!</p>
 * </Container>
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ContainerProps} props Component properties.
 * @returns React functional component.
 */
const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames("max-w-7xl mx-auto sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;

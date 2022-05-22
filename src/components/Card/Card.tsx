import classNames from "classnames";
import React from "react";
import "./Card.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * ## Card Component
 *
 * Card component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Card>
 *   <p>Hello world!</p>
 * </Card>
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {CardProps} props Component properties.
 * @returns React functional component.
 */
const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "bg-white overflow-hidden shadow sm:rounded-lg divide-y divide-gray-200",
        className
      )}
      {...rest}
    >
      {header && <div className="px-4 py-5 sm:px-6">{header}</div>}
      <div className="px-4 py-5 sm:p-6">{children}</div>
      {footer && <div className="px-4 py-4 sm:px-6">{footer}</div>}
    </div>
  );
};

export default Card;

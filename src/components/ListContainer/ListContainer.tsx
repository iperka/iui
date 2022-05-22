import classNames from "classnames";
import React from "react";
import "./ListContainer.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface ListContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: React.ReactNode[];
}

/**
 * ## ListContainer Component
 *
 * ListContainer component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <ListContainer label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ListContainerProps} props Component properties.
 * @returns React functional component.
 */
const ListContainer: React.FC<ListContainerProps> = ({
  items,
  className,
  ...rest
}) => {
  return (
    <ul
      role="list"
      className={classNames("divide-y divide-gray-200", className)}
      {...rest}
    >
      {items.map((item, index) => (
        <li key={index} className="px-4 py-4 sm:px-0">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListContainer;

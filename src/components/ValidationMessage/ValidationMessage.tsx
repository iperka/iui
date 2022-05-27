import classNames from "classnames";
import React from "react";
import "./ValidationMessage.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface ValidationMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  errors: string[];
}

/**
 * ## ValidationMessage Component
 *
 * ValidationMessage component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <ValidationMessage
 *   errors={[
 *     "Your password must be less than 4 characters.",
 *     "Your password must be less than 4 characters."
 *   ]}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {ValidationMessageProps} props Component properties.
 * @returns React functional component.
 */
const ValidationMessage: React.FC<ValidationMessageProps> = ({
  errors,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames("mt-2 text-sm text-red-600", className)}
    >
      <ul className="list-disc mx-4">
        {errors.map((error, index) => (
          <li key={index}>
            <p>{error}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationMessage;

import classNames from "classnames";
import React from "react";
import "./PrivacyNotice.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface PrivacyNoticeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  notice: React.ReactNode;
  onAcceptAll?: () => void;
  onRejectAll?: () => void;
}

/**
 * ## PrivacyNotice Component
 *
 * PrivacyNotice component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <PrivacyNotice
 *   notice={
 *     <>
 *       This website uses cookies to supplement a balanced diet and
 *       provide a much deserved reward to the senses after consuming
 *       bland but nutritious meals. Accepting our cookies is optional
 *       but recommended, as they are delicious. See our{" "}
 *       <a href="#" className="font-semibold text-indigo-600">
 *         cookie policy
 *       </a>
 *       .
 *     </>
 *   }
 *   onAcceptAll={() => {
 *     alert("You accepted all cookies");
 *   }}
 *   onRejectAll={() => {
 *     alert("You rejected all cookies");
 *   }}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {PrivacyNoticeProps} props Component properties.
 * @returns React functional component.
 */
const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({
  className,
  notice,
  onAcceptAll,
  onRejectAll,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames(
        "fixed inset-x-0 bottom-0 flex flex-col justify-between gap-y-4 gap-x-8 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8",
        className
      )}
    >
      <p className="max-w-4xl text-sm leading-6 text-gray-900">{notice}</p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          onClick={onAcceptAll}
          type="button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button
          onClick={onRejectAll}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
};

export default PrivacyNotice;

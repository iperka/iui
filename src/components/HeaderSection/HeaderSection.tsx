import React from "react";
import "./HeaderSection.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface HeaderSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
  header2: React.ReactNode;
  subtitle: React.ReactNode;
}

/**
 * ## HeaderSection Component
 *
 * HeaderSection component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <HeaderSection
 *   header="Pricing"
 *   header2="Take control of your team."
 *   subtitle="Start building for free, then add a site plan to go live. Account plans unlock additional features."
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {HeaderSectionProps} props Component properties.
 * @returns React functional component.
 */
const HeaderSection: React.FC<HeaderSectionProps> = ({
  header,
  header2,
  subtitle,
  ...rest
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            {header}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {header2}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

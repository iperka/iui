import classNames from "classnames";
import React from "react";
import Navbar, { NavbarProps } from "../Navbar/Navbar";
import "./StackedLayout.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface StackedLayoutProps extends NavbarProps {
  title: string;
}

/**
 * ## StackedLayout Component
 *
 * StackedLayout component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <StackedLayout
 *   title="Hello world!"
 *   customLink={(href, children) => (
 *     <div onClick={() => alert(`Navigate to ${href}...`)}>{children}</div>
 *   )}
 *   items={[
 *     { label: "Dashboard", href: "#", current: true },
 *     { label: "Team", href: "#", current: false },
 *     { label: "Projects", href: "#", current: false },
 *     { label: "Calendar", href: "#", current: false },
 *   ]}
 *   userMenuItems={[
 *     { label: "Profile", href: "#" },
 *     { label: "Settings", href: "#" },
 *     { label: "Log out", href: "#" },
 *   ]}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {StackedLayoutProps} props Component properties.
 * @returns React functional component.
 */
const StackedLayout: React.FC<StackedLayoutProps> = ({
  items,
  customLink,
  userMenuItems,
  avatar,
  fullWidth,
  avatarHidden,
  title,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames("min-h-full", className)} {...rest}>
      <Navbar
        items={items}
        customLink={customLink}
        userMenuItems={userMenuItems}
        avatar={avatar}
        fullWidth={fullWidth}
        avatarHidden={avatarHidden}
        sticky
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default StackedLayout;

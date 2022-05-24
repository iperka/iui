import classNames from "classnames";
import React, { Fragment } from "react";
import LogoLight from "../../assets/logo_light.svg";
import LogoDark from "../../assets/logo_dark.svg";
import "./Sidenav.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface SidenavProps extends React.HTMLAttributes<HTMLElement> {
  customLink: (href: string, children: JSX.Element) => React.ReactNode;
  items: {
    label: string;
    href: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    current: boolean;
  }[];
  secondaryTitle?: string;
  secondaryItems?: { label: string; href: string }[];
}

/**
 * ## Sidenav Component
 *
 * Sidenav component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Sidenav
 *   customLink={(href, children) => (
 *     <div onClick={() => {
 *       alert(`Navigate to ${href}...`);
 *     }}>{children}</div>
 *   )}
 *   items={[
 *     { label: "Dashboard", icon: HomeIcon, href: "#", current: true },
 *     { label: "Team", href: "#", icon: UsersIcon, current: false },
 *     { label: "Projects", href: "#", icon: MapIcon, current: false },
 *     { label: "Calendar", href: "#", icon: CalendarIcon, current: false },
 *   ]}
 *   secondaryItems={[
 *     { label: "Profile", href: "#" },
 *     { label: "Settings", href: "#" },
 *     { label: "Log out", href: "#" },
 *   ]}
 *   secondaryTitle="Test"
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {SidenavProps} props Component properties.
 * @returns React functional component.
 */
const Sidenav: React.FC<SidenavProps> = ({
  customLink,
  items = [],
  secondaryItems = [],
  secondaryTitle,
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white dark:bg-gray-800 overflow-y-auto max-w-lg",
        className
      )}
      {...rest}
    >
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-auto dark:hidden"
          src={LogoLight}
          alt="iperka"
          draggable="false"
        />
        <img
          className="h-8 w-auto hidden dark:block"
          src={LogoDark}
          alt="iperka"
          draggable="false"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav
          className="flex-1 px-2 space-y-8 bg-white dark:bg-gray-800"
          aria-label="Sidebar"
        >
          <div className="space-y-1">
            {items.map((item, index) => (
              <Fragment key={item.href + index}>
                {customLink(
                  item.href,
                  <div
                    className={classNames(
                      item.current
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:text-gray-200",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500 dark:text-gray-100"
                          : "text-gray-400 group-hover:text-gray-500 dark:text-gray-400",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.label}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="space-y-1">
            {secondaryTitle && (
              <h3
                className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                id="projects-headline"
              >
                {secondaryTitle}
              </h3>
            )}
            <div
              className="space-y-1"
              role="group"
              aria-labelledby="projects-headline"
            >
              {secondaryItems.map((item, index) => (
                <Fragment key={item.href + index}>
                  {customLink(
                    item.href,
                    <div className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-md hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                      <span className="truncate">{item.label}</span>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;

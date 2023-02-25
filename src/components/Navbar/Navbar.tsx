import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { Fragment } from "react";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import LogoDark from "../../assets/logo_dark.svg";
import "./Navbar.scss";
import Button from "../Button";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  customLink: (href: string, children: React.ReactNode) => React.ReactNode;
  items: { label: string; href: string; current: boolean }[];
  userMenuItems: { label: string; href: string }[];
  avatar?: AvatarProps;
  fullWidth?: boolean;
  avatarHidden?: boolean;
  sticky?: boolean;
}

/**
 * ## Navbar Component
 *
 * Navbar component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Navbar
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
 * @param {NavbarProps} props Component properties.
 * @returns React functional component.
 */
const Navbar: React.FC<NavbarProps> = ({
  customLink,
  items,
  userMenuItems,
  avatar,
  className,
  fullWidth,
  avatarHidden,
  sticky,
  ...rest
}) => {
  return (
    <Disclosure
      as="nav"
      className={classNames("bg-gray-800", sticky && "top-0 sticky", className)}
      {...rest}
    >
      {({ open }) => (
        <>
          <div
            className={classNames(
              "mx-auto px-2 sm:px-6 lg:px-8",
              !fullWidth && "max-w-7xl"
            )}
          >
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={LogoDark}
                    alt="iperka"
                    draggable={false}
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={LogoDark}
                    alt="iperka"
                    draggable={false}
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {items.map((item, index) => (
                      <Fragment key={item.href + index}>
                        {customLink(
                          item.href,
                          <div
                            className={classNames(
                              item.current
                                ? "bg-gray-600 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.label}
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              {avatarHidden ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex flex-1 items-center justify-end gap-x-6">
                    <Button size="medium">Sign In</Button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <Avatar {...avatar} size="small" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userMenuItems.map((item, index) => (
                          <Fragment key={item.href + index}>
                            {customLink(
                              item.href,
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                    )}
                                  >
                                    {item.label}
                                  </div>
                                )}
                              </Menu.Item>
                            )}
                          </Fragment>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {items.map((item, index) => (
                <Fragment key={item.href + index}>
                  {customLink(
                    item.href,
                    <Disclosure.Button
                      key={item.label}
                      as="div"
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.label}
                    </Disclosure.Button>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React, { useState } from "react";
import { CustomImageComponent } from "../../helpers/Image";
import { CustomLinkComponent } from "../../helpers/Link";
import Button from "../Button";
import logo from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";
import "./Header.scss";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * ### Company Name
   * Company name to display in the header.
   */
  companyName: string;

  /**
   * ### Logo Source
   * Logo source for light mode background.
   */
  logoSrc: string;

  /**
   * ### Logo Source (Dark)
   * Logo source for dark mode background.
   * If not set, the `logoSrc` will be used.
   */
  logoSrcDark?: string;
  logoAlt: string;

  variant?: "default" | "primary";

  /**
   * ### Custom Link Component
   * Custom link component to use instead of the default one.
   * Most SPA frameworks use a custom link component.
   * This allows to use a custom link component like `next/link`.
   *
   * #### Example:
   * ```tsx
   * <Header customLinkComponent={Link} />
   * ```
   */
  customLinkComponent?: CustomLinkComponent;

  /**
   * ### Custom Image Component
   * Custom image component to use instead of the default one.
   * This allows to use a custom image component like `next/image`.
   *
   * #### Example:
   * ```tsx
   * <Header customImageComponent={Image} />
   * ```
   */
  customImageComponent?: CustomImageComponent;

  /**
   * ### Screen Reader
   * Screen reader text for the header.
   * Allows to customize the texts for internationalization.
   *
   * **Default:**
   * ```ts
   * {
   *  openMainMenu: "Open main menu",
   *  closeMenu: "Close menu"
   * }
   * ```
   *
   * #### Example:
   * ```tsx
   * // Example for `next-i18next` `useTranslation` hook
   * <Header sr={{ openMainMenu: t("openMainMenu") }} />
   * ```
   */
  sr?: {
    openMainMenu?: string;
    closeMenu?: string;
  };

  /**
   * ### Sign In Button Text
   * Text for the sign in button.
   * Allows to customize the texts for internationalization.
   *
   * **Default:** `Sign In`
   *
   * #### Example:
   * ```tsx
   * // Example for `next-i18next` `useTranslation` hook
   * <Head signInButtonText={t("signInButtonText")} />
   * ```
   */
  signInButtonText?: string;
}

/**
 * ## Header Component
 *
 * Header component for iperka user interface.
 * This component uses the `@headlessui/react` library and `useState` hook from React.
 *
 * ### Example:
 *
 * ```tsx
 * <Header label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {HeaderProps} props Component properties.
 * @returns React functional component.
 */
const Header: React.FC<HeaderProps> = ({
  companyName,
  logoSrc = logo,
  logoSrcDark = logoDark,
  logoAlt,
  variant = "default",
  className,
  customLinkComponent: CustomLink = (props) => (
    <a {...props}>{props.children}</a>
  ),
  customImageComponent: CustomImage = (props) => <img {...props} />,
  sr = {
    openMainMenu: "Open main menu",
    closeMenu: "Close menu",
  },
  signInButtonText = "Sign In",
  ...rest
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      {...rest}
      className={classNames(
        variant === "primary" ? "bg-primary-600" : "bg-white dark:bg-gray-900",
        className
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <CustomLink href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{companyName}</span>
            <CustomImage
              className="h-8 w-auto dark:hidden"
              src={variant === "primary" ? logoSrcDark : logoSrc}
              alt={logoAlt}
            />
            <CustomImage
              className="h-8 w-auto hidden dark:block"
              src={logoSrcDark}
              alt={logoAlt}
            />
          </CustomLink>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="transparent"
            type="button"
            className={classNames(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              variant === "primary"
                ? "text-primary-300"
                : "text-gray-700 dark:text-gray-400"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{sr.openMainMenu}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <CustomLink
              key={item.name}
              href={item.href}
              className={classNames(
                "text-sm font-semibold leading-6",
                variant === "primary"
                  ? "text-white"
                  : "text-gray-900 dark:text-white"
              )}
            >
              {item.name}
            </CustomLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CustomLink
            href="#"
            className={classNames(
              "text-sm font-semibold leading-6",
              variant === "primary"
                ? "text-white"
                : "text-gray-900 dark:text-white"
            )}
          >
            {signInButtonText} <span aria-hidden="true">&rarr;</span>
          </CustomLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <CustomLink href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{companyName}</span>
              <CustomImage
                className="h-8 w-auto dark:hidden"
                src={logoSrc}
                alt={logoAlt}
              />
              <CustomImage
                className="h-8 w-auto hidden dark:block"
                src={logoSrcDark}
                alt={logoAlt}
              />
            </CustomLink>
            <Button
              variant="transparent"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{sr.closeMenu}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <CustomLink
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </CustomLink>
                ))}
              </div>
              <div className="py-6">
                <CustomLink
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {signInButtonText}
                </CustomLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;

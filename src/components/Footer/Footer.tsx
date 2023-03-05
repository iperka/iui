import classNames from "classnames";
import React from "react";
import { CustomLinkComponent } from "../../helpers/Link";
import "./Footer.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  navigation: {
    name: string;
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
  copyright: string;

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
}

/**
 * ## Footer Component
 *
 * Footer component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Footer
 *   copyright={`&copy; ${new Date().getFullYear()} iperka, Inc. All rights reserved.`}
 *  navigation={[
 *   {
 *     name: 'GitHub',
 *     href: '#',
 *     icon: (props) => (
 *       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
 *         <path
 *           fillRule="evenodd"
 *           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
 *           clipRule="evenodd"
 *         />
 *       </svg>
 *     ),
 *   }
 *  ]}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {FooterProps} props Component properties.
 * @returns React functional component.
 */
const Footer: React.FC<FooterProps> = ({
  navigation,
  copyright,
  customLinkComponent: CustomLink = (props) => (
    <a {...props}>{props.children}</a>
  ),
  className,
  ...rest
}) => {
  return (
    <footer
      className={classNames("bg-white dark:bg-gray-900", className)}
      {...rest}
    >
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <CustomLink href={item.href} key={item.href}>
              <span
                key={item.name}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white cursor-pointer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </CustomLink>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

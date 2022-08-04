import React from "react";
import "./Testimonial.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface TestimonialProps {
  content: React.ReactNode;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

/**
 * ## Testimonial Component
 *
 * Testimonial component for iperka user interface.
 *
 * ### Example:
 *
 * ```tsx
 * <Testimonial
 *   content="I love the product!"
 *   author={{
 *     name: "Max",
 *     role: "CEO",
 *     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
 *   }}
 * />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {TestimonialProps} props Component properties.
 * @returns React functional component.
 */
const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  ...rest
}) => {
  return (
    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
      <blockquote className="relative">
        <p className="text-lg tracking-tight text-slate-900">{content}</p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
          <div className="font-display text-base text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-500">{author.role}</div>
        </div>
        <div className="overflow-hidden rounded-full bg-slate-50">
          <img
            className="h-14 w-14 object-cover"
            src={author.image}
            alt=""
            width={56}
            height={56}
          />
        </div>
      </figcaption>
    </figure>
  );
};

/**
 * Quote icon component.
 *
 * @author Michael Beutler
 * @param props Default svg props.
 * @returns React functional component.
 */
const QuoteIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
};

export default Testimonial;

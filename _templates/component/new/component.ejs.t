---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from "react";
import "./<%= h.changeCase.pascal(name) %>.scss";

/**
 * Interface describing component properties.
 *
 * @author Michael Beutler
 * @version 1.0.0
 */
export interface <%= h.changeCase.pascal(name) %>Props {
  label: string;
}

/**
 * ## <%= h.changeCase.pascal(name) %> Component
 * 
 * <%= h.changeCase.pascal(name) %> component for iperka user interface.
 *
 * ### Example:
 * 
 * ```tsx
 * <<%= h.changeCase.pascal(name) %> label="Hello world!" />
 * ```
 *
 * @author Michael Beutler
 * @version 1.0.0
 * @param {<%= h.changeCase.pascal(name) %>Props} props Component properties.
 * @returns React functional component.
 */
const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({ label, ...rest }) => {
  return <div {...rest}>{}</div>;
};

export default <%= h.changeCase.pascal(name) %>;

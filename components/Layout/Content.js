import React from "react";
import { node, string, oneOfType } from "prop-types";

const Content = ({ children, ...props }) => <div {...props}>{children}</div>;
Content.propTypes = {
  children: oneOfType([node, string])
};
export default Content;

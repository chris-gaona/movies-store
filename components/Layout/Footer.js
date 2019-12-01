import React from "react";
import { css } from "@emotion/core";

const footerCls = css`
  text-align: center;
  background: #04070b;
  color: #fff;
`;
const Footer = () => (
  <div css={footerCls}>Appbase.io ©2018 Created by Appbase Inc.</div>
);
export default Footer;

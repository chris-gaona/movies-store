import React, { Component } from "react";
import Link from "next/link";
import { headerCls } from "./styles";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div css={headerCls}>
        <nav className="menuBar">
          <div className="logo">
            <Link href="/">
              <img src="/static/images/logo@1x.png" alt="logo" />
            </Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

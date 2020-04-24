import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom"
import img_logo from "../../assets/images/logo.png";
import "../../assets/styles/Sidebar.css";
import Menu from "./Menu/Menu";
import { connect } from "react-redux";

interface Props {
  ToggleHeader: boolean;
}

class Sidebar extends Component<Props> {
  render() {
    var { ToggleHeader } = this.props;
    return (
      <div>
        <div className="row">
          <div id="sidebar-collapse" className="col-md-2 col-sm-2 sidebar">
            <div className="row sidebar_row">
              <nav
                className="navbar navbar-expand-lg navbar-fixed-top sidebar_logo"
                role="navigation"
              >
                <img src={img_logo} alt="icon_logo" />
                <Link className="navbar-brand sidebar_logo-link" to="/">
                  CMS WineMart
                </Link>
              </nav>
              {/* Menu Component */}
              <Menu />
            </div>
          </div>
          <div
            className={`${
              ToggleHeader ? "col-md-12 col-sm-12" : "col-md-10 col-sm-10"
            }`}
            style={{ marginLeft: `${ToggleHeader ? "255px" : "0px"}` }}
          >
            <Switch>
              <Route exact path="/quanlykhachhang" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    ToggleHeader: state.ToggleHeader
  };
};
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

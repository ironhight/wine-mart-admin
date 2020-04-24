import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import icon_item from "../../../../assets/images/item.png";
import icon_dropdown from "../../../../assets/images/dropdown.png";
import icon_arrowRight_act from "../../../../assets/images/arrow_right_act.png";
import icon_dropdown_act from "../../../../assets/images/dropdown_act.png";
import { connect } from "react-redux";
import "../../../../assets/styles/Sidebar.css";

export interface Props {
  MenuList?: any;
}
export interface State {
  selected: boolean;
}
class MenuItem extends Component<Props, State> {
  private _nodes: any;
  constructor(props: Props) {
    super(props);
    // this.refImg = React.createRef();
    this.state = {
      selected: false
    };
    this._nodes = new Map();
  }

  _activeRoute = (routeName: any, childrens?: any) => {
    if (childrens) {
      let avtive = false;
      for (let child of childrens) {
        let path = routeName !== "/" ? routeName + child.path : child.path;
        if (window.location.pathname.indexOf(path) !== -1) {
          avtive = true;
        }
      }
      return avtive;
    } else {
      if (routeName === "/") {
        return window.location.pathname === routeName;
      } else {
        return window.location.pathname.indexOf(routeName) > -1 ? true : false;
      }
    }
  };
  _activeRoutechildrens = (routeName: any) => {
    return routeName === window.location.pathname ? true : false;
  };
  _handleTitleClickSubmnu = (key: string) => {
    this.setState({
      selected: true
    });
  };
  
  render() {
    var { MenuList } = this.props;
    return (
      <div className="Sidebar__menu_nav_ul-item">
        {MenuList.map((menuitem: any, index: number) =>
          menuitem.childrens === undefined ? (
            <li className="nav-item Sidebar__menu_nav_ul_item-li" key={index}>
              <NavLink
                className="nav-link"
                to={menuitem.path}
                activeClassName="Sidebar__menu_nav_ul_item-li-selected"
                id={`${index}`}
                onClick={() => this._handleTitleClickSubmnu("")}
              >
                <img
                  src={
                    this._activeRoute(menuitem.path)
                      ? menuitem.icons[0].active
                      : menuitem.icons[0].inActive
                  }
                  alt="icon_menu"
                  className="Sidebar__menu_nav_ul_item_li-img"
                />
                {menuitem.title}
              </NavLink>
            </li>
          ) : (
            <div key={index}>
              <li
                className={
                  this._activeRoute(menuitem.path, menuitem.childrens)
                    ? "nav-item Sidebar__menu_nav_ul_item-li Sidebar__menu_nav_ul_item-li-selected"
                    : "nav-item Sidebar__menu_nav_ul_item-li"
                }
                data-toggle="collapse"
                data-target={`#collapseExample${index}`}
                aria-expanded="false"
                aria-controls={`#collapseExample${index}`}
                key={index}
              >
                <img
                  src={
                    this._activeRoute(menuitem.path, menuitem.childrens)
                      ? menuitem.icons[0].active
                      : menuitem.icons[0].inActive
                  }
                  alt="icon_menu"
                  className="Sidebar__menu_nav_ul_item_li-img"
                />
                {menuitem.title}
                <img
                  src={ this._activeRoute(menuitem.path, menuitem.childrens) ? icon_dropdown_act:icon_dropdown}
                  alt="dropdown"
                  className="Sidebar__menu_nav_ul_item_li-imgdropdown"
                />
              </li>
              <ul
                className="Sidebar__menu_nav_ul_item_children collapse"
                id={`collapseExample${index}`}
              >
                {menuitem.childrens.map(
                  (menuchildrens: any, indexchildrens: number) => (
                    <li
                      className="nav-item Sidebar__menu_nav_ul_item_children-li"
                      key={indexchildrens}
                      onClick={() => this._handleTitleClickSubmnu("")}
                    >
                      <Link
                        to={menuitem.path + menuchildrens.path}
                        className={
                          this._activeRoutechildrens(
                            `${menuitem.path + menuchildrens.path}`
                          )
                            ? "nav-item Sidebar__menu_nav_ul_item_children-li-link Sidebar__menu_nav_ul_item_children_li--active"
                            : "nav-item Sidebar__menu_nav_ul_item_children-li-link"
                        }
                      >
                        <img src={this._activeRoutechildrens( `${menuitem.path + menuchildrens.path}`) ? icon_arrowRight_act : icon_item} alt="icon_item" />
                        {menuchildrens.nameVi}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    MenuList: state.MenuData
  };
};

export default connect(mapStateToProps, null)(MenuItem);

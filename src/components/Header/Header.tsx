import React, { Component } from "react";
import icon_menu from "../../assets/images/menu.png";
import avartar_user_default from "../../assets/images/user-default.png";
import { connect } from "react-redux";
import * as actions from "../../store/actions/sidebar.Actions";
import * as actionsAccount from "../../store/actions/account";
import "../../assets/styles/Header.css";

interface Props {
  SubmitResultToggle: any;
  ToggleHeader: any;
  WidthSideBar:number,
  SubmitLogout:any
}

class Header extends Component<Props> {
  SumitToggleMenu = (): void => {
    this.props.SubmitResultToggle();
  };
  SubmitLogout =()=>{
   this.props.SubmitLogout();
   window.location.href = "/";
  }
  render() {
    const { ToggleHeader, WidthSideBar} = this.props;    
    return (
      /*
                Header
             */
      <div className="row header_winemart">
        <div className="col-md-6 col-sm-6 header__left">
          <img
            src={icon_menu}
            alt="icon_menu"
            onClick={() => this.SumitToggleMenu()}
          />
        </div>
        <div className="col-md-6 col-sm-6 header__right">
          <div className="dropdown header__right-dropdown">
            <div
              className="dropdown-toggle header__right_dropdown-toggle"
              id="dropdownMenuAccount"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ marginRight: `${ToggleHeader ? `${WidthSideBar-2}px` : "0px"}` }}
            >
              <img src={avartar_user_default} alt="avatar user" />
            </div>
            <div
              className="dropdown-menu header__right_dropdown-menu"
              aria-labelledby="dropdownMenuAccount"
            >
              <div className="dropdown-item header__right_dropdown-item">
                <div className="row header__right_dropdown_item_box1">
                  <div className="col-md-12 header__right_dropdown_item_box1-img">
                    <img src={avartar_user_default} alt="avatar user" />
                  </div>
                  <div className="col-md-12 header__right_dropdown_item_box1-name">
                    <p>Phat Doan</p>
                    <p>0975547178</p>
                  </div>
                </div>
                <div className="row header__right_dropdown_item_box2">
                  <div className="col-md-6 col-sm-6 header__right_dropdown_item_box2-btn-profile">
                    <button className="btn-secondary">Hồ Sơ</button>
                  </div>
                  <div className="col-md-6 col-sm-6 header__right_dropdown_item_box2-btn-logout">
                    <button className="btn-secondary" onClick={()=>this.SubmitLogout()}>Đăng xuất</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    ToggleHeader: state.ToggleHeader,
    WidthSideBar: state.GetWidthtoSideBar
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    SubmitResultToggle: () => {
      dispatch(actions.ResultToggle());
    },
    SubmitLogout: ()=>{
      dispatch(actionsAccount.Logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

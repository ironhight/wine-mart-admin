import React, { Component } from "react";
import "../../assets/styles/Login.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/account";

interface Props {
  CallCheckLogin: any;
}

interface State {
  username: string;
  password: string;
  result: boolean;
  firstlogin: boolean;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      result: false,
      firstlogin: false
    };
  }
  GetvalueInputUserName = (e: any) => {
    this.setState({
      username: e.target.value
    });
  };
  GetvalueInputPassword = (e: any) => {
    this.setState({
      password: e.target.value
    });
  };
  SubmitLogin = () => {
    //  Xử lý API Login trả về kết quả
    var { username, password } = this.state;
    this.setState({
      firstlogin: true
    });
    this.props.CallCheckLogin(username, password);
  };
  render() {
    var { username, password, firstlogin } = this.state;
    return (
      <div>
        <div className="row layout__login justify-content-center">
          <div className="col-md-6 col-12 layout__login-box">
            <div className="layout__login-box2">
              <div className="row layout__login-header">
                <div className="col-12 layout__login--header-title">
                  <h2>WineMart CMS</h2>
                </div>
              </div>
              <div className="row layout__login-content">
                <div className={`col-12 layout__login-content-input `}>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    name="username"
                    onChange={e => this.GetvalueInputUserName(e)}
                    className={
                      username ? "layout__login-content-input--noblank" : ""
                    }
                  />
                  {!username && firstlogin ? (
                    <p>Số điện thoại không được bỏ trống</p>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="col-12 layout__login-content-input">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    onChange={e => this.GetvalueInputPassword(e)}
                    className={
                      password ? "layout__login-content-input--noblank" : ""
                    }
                  />
                  {!password && firstlogin ? (
                    <p>Mật khẩu không được bỏ trống</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              <div className="row layout__login-footer">
                <div className="col-12 layout__login-footer-button">
                  <button onClick={() => this.SubmitLogin()}>Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => {
// }

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    CallCheckLogin: (username: string, password: string) => {
      dispatch(actions.CkeckLogin(username, password));
    }
  };
};
export default connect(null, mapDispatchToProps)(Login);

/*
  layout__login
    -> layout__login-box
       -> layout__login-box2
            -> layout__login-header
*/

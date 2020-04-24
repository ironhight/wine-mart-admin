import React, { Component } from "react";
import Search from "../components/Search";
import ModalQuanLyTaiKhoan from "../components/ModalQuanLyTaiKhoan";

class QuanLyTaiKhoan extends Component {
  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  render() {
    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách tài khoản
        </h2>
        <div className="text-left my-2">
          <div className="row">
            <div className="col-10 px-0">
              <div className="form-row">
                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="searchName"
                    placeholder="Tìm theo tên"
                    value=""
                    onChange={this._handleChange}
                  />
                </div>

                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="searchName"
                    placeholder="Tìm theo số điện thoại"
                    value=""
                    onChange={this._handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-2 px-0">
              <button
                className="btn btn-info text-left"
                data-toggle="modal"
                data-target="#modelQuanLyTaiKhoan"
                style={{
                  backgroundColor: "#AD484B",
                  fontSize: "14px",
                  float: "right"
                }}
              >
                <img
                  src="https://winemartcms.bookoke.com/img/ic_plus.png"
                  alt=""
                  style={{
                    width: "18px",
                    marginRight: "5px"
                  }}
                />
                Thêm mới
              </button>
            </div>
          </div>
        </div>
        <ModalQuanLyTaiKhoan />
      </div>
    );
  }
}

export default QuanLyTaiKhoan;

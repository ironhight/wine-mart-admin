import React, { Component } from "react";
import Search from "./Search";

class ModalQuanLyTaiKhoan extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelQuanLyTaiKhoan"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content edit">
              <div className="modal-header">
                <h4 className="modal-title">Thêm nhân viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Nhóm Quyền</label>
                      <div className="col-8">
                        <select
                          name="roleID"
                          className="form-control"
                          required={true}
                        >
                          <option value="1">Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Số điện thoại</label>
                      <div className="col-8">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Số điện thoại"
                          maxLength={11}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Tên NV</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tên nhân viên"
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Mật khẩu</label>
                      <div className="col-8">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Mật khẩu"
                          required={true}
                        />

                        <div className="err err-pw"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Nhập lại mật khẩu</label>
                      <div className="col-8">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Xác nhận lại mật khẩu"
                          required={true}
                        />

                        <div className="err err-cpw"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Mã NV</label>
                      <div className="col-8">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Mã nhân viên"
                          required={true}
                        />

                        <div className="err err-cus"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Chức vụ</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Chức vụ"
                          required={true}
                        />

                        {/* <div className="err err-cus"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button type="button" className="btn btn-success">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalQuanLyTaiKhoan;

import React, { Component } from "react";

class ModalDanhSachKH extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelDanhSachKH"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content edit">
              <div className="modal-header">
                <h4 className="modal-title">Thêm khách hàng</h4>
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
                      <label className="col-4">Tên khách hàng</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên khách hàng"
                          required={true}
                        />
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
                          placeholder="Nhập số điện thoại khách hàng"
                          maxLength={11}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Email</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập email khách hàng"
                          required={true}
                        />

                        <div className="err err-pw"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row form-group">
                      <label className="col-4">Ngày sinh</label>
                      <div className="col-8">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Chọn ngày sinh"
                          required={true}
                        />

                        <div className="err err-cpw"></div>
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

export default ModalDanhSachKH;

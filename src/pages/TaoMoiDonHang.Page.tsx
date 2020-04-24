import React, { Component } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import EmailIcon from "@material-ui/icons/Email";
import CakeIcon from "@material-ui/icons/Cake";
import DateRangeIcon from "@material-ui/icons/DateRange";

import Flatpickr from "react-flatpickr";

interface Props {}
interface State {
  date: any;
}

class TaoMoiDonHang extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <div className="order__title row">
          <div className="col-8">
            <h4>Tạo đơn hàng</h4>

            <div className="order__infor">
              <p className="order__infor__title">Thông tin đơn hàng</p>
              <div className="order__infor__select">
                <div className="order__infor__select--number">
                  <div>Số lượng</div>
                  <input type="number" value={1} />
                </div>
                <div className="order__infor__select--product">
                  <div>
                    <AddShoppingCartIcon />
                  </div>
                  <div className="form-group">
                    {/* <label></label> */}
                    <select className="form-control" name="" id="">
                      <option>Chọn sản phẩm</option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="order__infor__unit">Đơn vị tính: VNĐ</div>
              <div className="order__infor__tableProduct">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Tổng số lượng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Thành tiền</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Giảm giá</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Tổng tiền</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="delivery__infor">
              <p className="delivery__infor__title">Thông tin giao hàng</p>
              <div className="delivery__infor__address">
                <label className="btn-radio">
                  Địa chỉ giao hàng mới
                  <input type="radio" checked value="-1" name="address" />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="delivery__infor__input">
                <div className="row">
                  <div
                    className="delivery__infor__input--text col-6"
                    style={{ paddingLeft: "0px" }}
                  >
                    <span>
                      <PersonIcon />
                    </span>
                    <input type="text" placeholder="Nhập họ tên người nhận" />
                  </div>

                  <div
                    className="delivery__infor__input--text col-6"
                    style={{ paddingRight: "0px" }}
                  >
                    <span>
                      <PhoneIcon />
                    </span>
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại người nhận"
                    />
                  </div>
                </div>

                <div
                  className="delivery__infor__input--text"
                  style={{ marginTop: "15px" }}
                >
                  <span>
                    <MyLocationIcon />
                  </span>
                  <input type="text" placeholder="Nhập địa chỉ giao hàng" />
                </div>
              </div>

              <div className="delivery__infor__select row">
                <div
                  className="delivery__infor__select--item col-4"
                  style={{ paddingLeft: "0px" }}
                >
                  <select className="form-control" name="" id="address">
                    <option>Chọn tỉnh thành</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>

                <div className="delivery__infor__select--item col-4">
                  <select className="form-control" name="" id="province">
                    <option>Chọn quận huyện</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <div
                  className="delivery__infor__select--item col -4"
                  style={{ paddingRight: "0px" }}
                >
                  <select className="form-control" name="" id="nothing">
                    <option>Chọn phường xã</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>

              <div className="delivery__infor__live">
                <div className="delivery__infor__live--home">
                  <label className="btn-radio">
                    Nhà riêng
                    <input type="radio" value={1} name="place" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="delivery__infor__live--company">
                  <label className="btn-radio">
                    Công ty
                    <input type="radio" value={2} name="place" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="delivery__infor__time">
                <h5>Thời gian giao hàng</h5>
                <div className="select__times">
                  <span>
                    <DateRangeIcon />
                  </span>
                  <Flatpickr
                    // data-enable-time
                    value={date}
                    onChange={(date: any) => {
                      this.setState({ date });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p style={{ float: "right" }}>Người tạo: Nguyễn Thanh Sơn</p>
            <div className="customer">
              <nav>
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    data-toggle="tab"
                    href="#nav-customer"
                    role="tab"
                    aria-controls="nav-customer"
                    aria-selected="true"
                  >
                    Khách hàng cũ
                  </a>
                  <a
                    className="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-customer-new"
                    role="tab"
                    aria-controls="nav-customer-new"
                    aria-selected="false"
                  >
                    Tạo khách hàng mới
                  </a>
                </div>
              </nav>
              <div className="tab-content mt-3" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-customer"
                  role="tabpanel"
                >
                  <div className="note">
                    <i>* Đối với khách hàng đã có tài khoản</i>
                  </div>
                  <div className="mb-3">
                    <select className="form-control customerOld">
                      <option value="1"></option>
                      <option value="2"></option>
                      <option value="3"></option>
                    </select>
                  </div>
                  <div className="infoCusOld"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-customer-new"
                  role="tabpanel"
                >
                  <div className="note">
                    <i>* Đối với khách hàng chưa có tài khoản</i>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <PersonIcon />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ và tên"
                      id="customerFullnameNew"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <PhoneIcon />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số điện thoại"
                      id="customerPhoneNew"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <EmailIcon />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập email"
                      id="customerEmailNew"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <CakeIcon />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập ngày sinh"
                      id="customerBirthDayNew"
                    />
                  </div>
                  <p className="err errCustomerNew"></p>
                  <p className="spanSuccess customerNewSuccess"></p>
                  <div className="input-group">
                    <button className="btn btn-add" id="createCusNew">
                      Tạo mới
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="promotion">
              <h5>Khuyến mãi</h5>
              <div className="input-group mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập mã khuyến mãi"
                  id="searchPromotion"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text" id="btn-apply">
                    Áp dụng
                  </span>
                </div>
              </div>
            </div>
            <div className="pay">
              <div className="pay__item">
                <h5>Phương thức thanh toán</h5>
                <div className="pay__content">
                  <div className="pay__content1">
                    {/* <span className="checkmark"></span> */}
                    <input type="radio" checked value={1} />
                    <label className="btn-radio">
                      Thanh toán tiền mặt khi nhận hàng (COD)
                    </label>
                  </div>

                  <div className="pay__content2">
                    {/* <span className="checkmark"></span> */}
                    <input type="radio" checked value={2} />
                    <label className="btn-radio">Thanh toán tại chỗ</label>
                  </div>
                </div>
              </div>
              <div className="pay__item">
                <h5>Hình thức mua hàng</h5>
                <div className="pay__content">
                  <div className="pay__content1">
                    <input type="radio" checked value={1} />
                    <label className="btn-radio">Mua tại quầy</label>
                    {/* <span className="checkmark"></span> */}
                  </div>

                  <div className="pay__content2">
                    <input type="radio" checked value={2} />
                    <label className="btn-radio">Mua online</label>
                    {/* <span className="checkmark"></span> */}
                  </div>
                </div>
              </div>
              <div className="pay__item">
                <label>Ghi chú</label>
                <div className="pay__content--note">
                  <textarea
                    name=""
                    id="orderNote"
                    placeholder="Nhập ghi chú cho đơn hàng"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="btn">
              <button className="btn btn-add">Tạo mới đơn hàng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaoMoiDonHang;

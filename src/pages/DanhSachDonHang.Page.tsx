import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ChildDanhSachDH from "../components/DanhSachDH/ChildDanhSachDH.Page";
// import ModalDanhSachSanPham from "../components/DanhSachSanPham/ModalDanhSachSanPham";
import * as columsAction from "../store/actions/columsActions";
import * as DSDHAction from "../store/actions/danhSachDonHang.Actions";
// import * as selectAction from "../store/actions/select.Actions";

import Search from "../components/Search";

interface Props {
  columsReducers: any;
  getColums: any;
  getDSDH: any;
  DSDH: any;
  //   select: any;
  //   getSelect: any;
}

interface State {
  keyWord: any;
  id: string;
}

class DanhSachDonHang extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyWord: "",
      id: ""
    };
  }

  componentDidMount() {
    this.props.getColums("danhSachDonHang");
    this.props.getDSDH();
    // this.props.getSelect("loaiDanhSachSanPham");
  }

  _handleChange = (e: any) => {
    [e.target.name] = e.target.value;
  };

  _handleSearch = (keyWord: any, id: string) => {
    this.setState({
      keyWord,
      id
    });
  };

  render() {
    let { columsReducers, DSDH } = this.props;
    console.log("DanhSachDonHang -> render -> DSDH", DSDH);
    let { keyWord, id } = this.state;

    !_.isEmpty(DSDH) && id === "search_name"
      ? (DSDH = DSDH.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    !_.isEmpty(DSDH) && id === "search_code"
      ? (DSDH = DSDH.filter((item: any) => {
          return item.maDH.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    !_.isEmpty(DSDH) && id === "search_phone"
      ? (DSDH = DSDH.filter((item: any) => {
          return (
            item.phoneNumber.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
          );
        }))
      : console.log("ERROR");

    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách đơn hàng
        </h2>
        <div className="text-left my-2">
          <div className="row">
            <div className="col-10" style={{ paddingLeft: "0px" }}>
              <div className="form-row">
                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  <Search
                    keyWord={this._handleSearch}
                    holder="Tìm theo mã đơn hàng"
                    id="search_name"
                  />
                </div>
                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  <Search
                    keyWord={this._handleSearch}
                    holder="Tìm theo SDT khách hàng"
                    id="search_barcode"
                  />
                </div>
                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  <Search
                    keyWord={this._handleSearch}
                    holder="Tìm theo tên khách hàng"
                    id="search_barcode"
                  />
                </div>
                <div className="form-group mr-1">
                  <select className="form-control" id="searchType">
                    <option> --Chọn trạng thái-- </option>
                  </select>
                </div>

                <div className="form-group mr-1">
                  <select className="form-control" id="searchStatus">
                    <option>--Thời gian giao hàng--</option>
                    <option value="0">Chưa kích hoạt bán hàng</option>
                    <option value="1">Kích hoạt bán hàng</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-2" style={{ paddingRight: "0px" }}>
              <button
                className="btn btn-info text-left"
                data-toggle="modal"
                data-target="#modelDanhSachSanPham"
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
        <div>
          <div className="row">
            <table
              className="table table-bordered text-center"
              style={{ fontSize: "13px" }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#F3F6F9",
                    opacity: 0.6,
                    fontSize: "14px"
                  }}
                >
                  <th>STT</th>
                  {columsReducers.columsName.map((item: any, index: number) => (
                    <th key={index}>{item}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <ChildDanhSachDH DSDH={DSDH} />
              </tbody>
            </table>
          </div>
        </div>
        {/* <ModalDanhSachDH /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsDanhSachDH(string));
    },
    getDSDH: () => {
      dispatch(DSDHAction.getDanhSachDH());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers,
    DSDH: state.danhSachDHReducer,
    select: state.selectReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachDonHang);

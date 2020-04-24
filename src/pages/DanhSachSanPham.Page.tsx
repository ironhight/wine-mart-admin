import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import SanPham from "../components/DanhSachSanPham/SanPham";
import ModalDanhSachSanPham from "../components/DanhSachSanPham/ModalDanhSachSanPham";
import * as columsAction from "../store/actions/columsActions";
import * as DSSPAction from "../store/actions/danhSachSanPham.Action";
import * as selectAction from "../store/actions/select.Actions";

import Search from "../components/Search";

interface Props {
  columsReducers: any;
  getColums: any;
  getDSSP: any;
  DSSP: any;
  select: any;
  getSelect: any;
}

interface State {
  keyWord: any;
  id: string;
}

class DanhSachSanPham extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyWord: "",
      id: ""
    };
  }

  componentDidMount() {
    this.props.getColums("danhSachSanPham");
    this.props.getDSSP();
    this.props.getSelect("loaiDanhSachSanPham");
  }

  _handleChange = (e: any) => {
    [e.target.name] = e.target.value;
  };

  _handleSearch = (keyWord: any, id: string) => {
    // console.log("DanhSachSanPham -> _handleSearch -> id", id);
    // console.log("DanhSachSanPham -> _handleSearch -> keyWord", keyWord);

    this.setState({
      keyWord,
      id
    });
  };

  _id = (data: any) => {
    this.setState({ id: data });
  };

  render() {
    let { columsReducers, DSSP, select } = this.props;
    // console.log("DanhSachSanPham -> render -> select", select);

    // let id: string = "";

    let { keyWord, id } = this.state;
    // console.log("DanhSachSanPham -> render -> id", id);
    !_.isEmpty(DSSP) && id === "search_name"
      ? (DSSP = DSSP.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    !_.isEmpty(DSSP) && id === "search_barcode"
      ? (DSSP = DSSP.filter((item: any) => {
          return item.maSP.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    // console.log("DanhSachSanPham -> render -> DSSP", DSSP);
    // console.log("Run render  danh sach san pham !!!!!");
    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách sản phẩm
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
                    holder="Tìm theo tên"
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
                    holder="Tìm theo barcode"
                    id="search_barcode"
                  />
                </div>
                <div className="form-group mr-1">
                  <select className="form-control" id="searchType">
                    <option>--Chọn loại sản phẩm--</option>
                    {!_.isEmpty(select.optionName)
                      ? select.optionName.map((item: any, index: number) => (
                          <option key={index}>{item}</option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="form-group mr-1">
                  <select className="form-control" id="searchStatus">
                    <option>--Chọn trạng thái--</option>
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
                <SanPham DSSP={DSSP} />
              </tbody>
            </table>
          </div>
        </div>
        <ModalDanhSachSanPham />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsDanhSachSanPham(string));
    },
    getDSSP: () => {
      dispatch(DSSPAction.getDanhSachSP());
    },
    getSelect: (string: string) => {
      dispatch(selectAction.getSelectLoaiSP(string));
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers,
    DSSP: state.danhSachSpReducer,
    select: state.selectReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachSanPham);

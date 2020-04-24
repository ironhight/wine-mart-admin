import React, { Component } from "react";
import ChildLoaiSanPham from "../components/LoaiSanPham/ChildLoaiSanPham";
import ModalLoaiSanPham from "../components/LoaiSanPham/ModalLoaiSanPham";
import * as columsActions from "../store/actions/columsActions";
import _ from "lodash";
import * as loaiSpActions from "../store/actions/loaiSanPham.Actions";
import Search from "../components/Search";

import { connect } from "react-redux";

interface Props {
  colums: any;
  getColums: any;
  loaiSP: any;
  getLoaiSP: any;
}

interface State {
  // danhSachSanPham: any;
  // // name: string;
  keyWord: string;
}

class LoaiSanPham extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyWord: ""
    };
  }

  componentDidMount() {
    this.props.getColums("loaiSanPham");
    this.props.getLoaiSP();
  }
  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  _handleSearch = (keyWord: any) => {
    this.setState({
      keyWord
    });
  };

  render() {
    let { colums, loaiSP } = this.props;
    let { keyWord } = this.state;
    !_.isEmpty(loaiSP)
      ? (loaiSP = loaiSP.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    console.log("LoaiSanPham -> render -> colums", colums);
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
            <div className="col-10 px-0">
              <div className="form-row">
                <div className="input-group mr-1">
                  <div className="input-group-addon">
                    <img
                      src="https://winemartcms.bookoke.com/img/ic_search.png"
                      alt=""
                    />
                  </div>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="searchName"
                    placeholder="Tìm theo tên"
                    value=""
                    onChange={this._handleChange}
                  /> */}
                  <Search
                    keyWord={this._handleSearch}
                    holder="Tìm theo tên"
                    id="search_name"
                  />
                </div>

                <div className="form-group ml-1">
                  <select className="form-control" id="searchType">
                    <option>--Chọn danh mục--</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-2 px-0">
              <button
                className="btn btn-info text-left"
                data-toggle="modal"
                data-target="#modelLoaiSanPham"
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
                  <th>ID</th>
                  {!_.isEmpty(colums.columsName)
                    ? colums.columsName.map((item: any, index: number) => (
                        <th key={index}>{item}</th>
                      ))
                    : null}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <ChildLoaiSanPham loaiSP={loaiSP} />
              </tbody>
            </table>
          </div>
        </div>
        <ModalLoaiSanPham />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsActions.columsLoaiSanPham(string));
    },
    getLoaiSP: () => {
      dispatch(loaiSpActions.getLoaiSP());
    }
  };
};

const mapStateToProps = (state: any) => {
  return { colums: state.columsReducers, loaiSP: state.loaiSpReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoaiSanPham);

import React, { Component } from "react";
import ChildDanhMucSanPham from "../components/DanhMucSanPham/ChildDanhMucSanPham";
import ModalDanhMucSanPham from "../components/DanhMucSanPham/ModalDanhMucSanPham";
import * as columsAction from "../store/actions/columsActions";
import * as DanhMucSpActions from "../store/actions/danhMucSanPham.Actions";
import Search from "../components/Search";

import { connect } from "react-redux";
import _ from "lodash";

interface Props {
  columsReducers: any;
  getColums: any;
  DMSP: any;
  getDMSP: any;
}

interface State {
  mangDanhMucSanPham: any;
  name: string;
  keyWord: string;
}

class DanhMucSanPham extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      mangDanhMucSanPham: [],
      keyWord: ""
    };
  }

  componentDidMount() {
    this.props.getColums("danhMucSanPham");
    this.props.getDMSP();
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({
    //   // computed
    //   [e.target.name]: e.target.value
    // });
  };

  _handleSearch = (keyWord: any) => {
    this.setState({
      keyWord
    });
  };

  render() {
    let { columsReducers, DMSP } = this.props;

    let { keyWord } = this.state;
    !_.isEmpty(DMSP)
      ? (DMSP = DMSP.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");
    // const {name: string } = this.state;
    console.log("DanhMucSanPham -> render -> columsReducers", columsReducers);

    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách danh mục sản phẩm
        </h2>
        <div className="text-left my-2">
          <div className="row">
            <div className="col-8 px-0">
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
              </div>
            </div>
            <div className="col-4  px-0">
              <button
                className="btn btn-info text-left my-2"
                data-toggle="modal"
                data-target="#modelDanhMucSanPham"
                style={{
                  backgroundColor: "#AD484B",
                  fontSize: "14px",
                  float: "right"
                }}
              >
                <img
                  src="https://winemartcms.bookoke.com/img/ic_plus.png"
                  alt=""
                  style={{ width: "18px", marginRight: "5px" }}
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
                  {columsReducers.columsName.map((item: any, index: number) => (
                    <th key={index}>{item}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <ChildDanhMucSanPham DMSP={DMSP} />
              </tbody>
            </table>
          </div>
        </div>
        <ModalDanhMucSanPham />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsDanhMucSanPham(string));
    },
    getDMSP: () => {
      dispatch(DanhMucSpActions.getDanhMucSP());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers,
    DMSP: state.danhMucSpReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhMucSanPham);

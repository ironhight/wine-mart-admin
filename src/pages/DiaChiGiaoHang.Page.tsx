import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ChildDiaChiGiaoHang from "../components/DiaChiGiaoHang/ChildDiaChiGiaoHang";
// import ModalDiaChiGiaoHang from "../components/DiaChiGiaoHang/ModalDiaChiGiaoHang";
import * as columsAction from "../store/actions/columsActions";
import * as DCGHAction from "../store/actions/diaChiGiaoHang.Action";

import Search from "../components/Search";

interface Props {
  columsReducers: any;
  getColums: any;
  getDCGH: any;
  DCGH: any;
}

interface State {
  keyWord: any;
  id: string;
}

class DiaChiGiaoHang extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyWord: "",
      id: ""
    };
  }

  componentDidMount() {
    this.props.getColums("diaChiGiaoHang");
    this.props.getDCGH();
  }

  _handleSearch = (keyWord: any, id: string) => {
    this.setState({
      keyWord,
      id
    });
  };

  render() {
    let { columsReducers, DCGH } = this.props;
    let { keyWord, id } = this.state;
    !_.isEmpty(DCGH) && id === "search_phone"
      ? (DCGH = DCGH.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách địa chỉ giao hàng
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
                    holder="Tìm theo số điện thoại"
                    id="search_phone"
                  />
                </div>
              </div>
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
                </tr>
              </thead>
              <tbody>
                <ChildDiaChiGiaoHang DCGH={DCGH} />
              </tbody>
            </table>
          </div>
        </div>
        {/* <ModalDiaChiGiaoHang /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsDiaChiGiaoHang(string));
    },
    getDCGH: () => {
      dispatch(DCGHAction.getDiaChiGiaoHang());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers,
    DCGH: state.diaChiGiaoHangReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaChiGiaoHang);

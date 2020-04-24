import React, { Component } from "react";
import ModalDanhSachKH from "../components/DanhSachKH/ModalDanhSachKH";
import ChildDanhSachKH from "../components/DanhSachKH/ChildDanhSachKH";
import Search from "../components/Search";
import { connect } from "react-redux";
import * as columsAction from "../store/actions/columsActions";
import * as danhSachKHAction from "../store/actions/danhSachKH.Action";
import _ from "lodash";

interface Props {
  DSKH: any;
  columsReducers: any;
  getColums: any;
  getDSKH: any;
}
interface State {
  keyWord: any;
}

class DanhSachKH extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyWord: ""
    };
  }
  componentDidMount() {
    this.props.getColums("danhSachKH");
    this.props.getDSKH();
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  _handleSearch = (keyWord: any) => {
    this.setState({
      keyWord
    });
  };

  render() {
    let { columsReducers, DSKH } = this.props;
    console.log("DanhSachKH -> render -> columsReducers", columsReducers);

    let { keyWord } = this.state;
    !_.isEmpty(DSKH)
      ? (DSKH = DSKH.filter((item: any) => {
          return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách khách hàng
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
                    holder="Tìm theo tên hoặc số điện thoại"
                    id="search_name_and_phone"
                  />
                </div>
              </div>
            </div>
            <div className="col-2" style={{ paddingRight: "0px" }}>
              <button
                className="btn btn-info text-left"
                data-toggle="modal"
                data-target="#modelDanhSachKH"
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
                <ChildDanhSachKH DSKH={DSKH} />
              </tbody>
            </table>
          </div>
        </div>
        <ModalDanhSachKH />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsDanhSachKH(string));
    },
    getDSKH: () => {
      dispatch(danhSachKHAction.getDanhSachKH());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers,
    DSKH: state.danhSachKHReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKH);

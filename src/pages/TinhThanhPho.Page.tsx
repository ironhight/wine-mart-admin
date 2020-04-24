import React, { Component } from "react";
import _ from "lodash";
import ChildTinhThanhPho from "../components/TinhThanhPho/ChildTinhThanhPho";
import ModalTinhThanhPho from "../components/TinhThanhPho/ModalTinhThanhPho";

import * as columsAction from "../store/actions/columsActions";
import { connect } from "react-redux";

interface Props {
  getColums: any;
  colums: any;
}
interface State {}

class TinhThanhPho extends Component<Props, State> {
  componentDidMount() {
    this.props.getColums("tinhThanhPho");
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({
    //   // computed
    //   [e.target.name]: e.target.value
    // });
  };

  render() {
    const { colums } = this.props;
    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách Tỉnh/Thành phố
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
              </div>
            </div>
            <div className="col-2 px-0">
              <button
                className="btn btn-info text-left"
                data-toggle="modal"
                data-target="#modelTinhThanhPho"
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
                <ChildTinhThanhPho />
              </tbody>
            </table>
          </div>
        </div>
        <ModalTinhThanhPho />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsTinhThanhPho(string));
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    colums: state.columsReducers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TinhThanhPho);

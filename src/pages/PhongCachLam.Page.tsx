import React, { Component } from "react";
import ChildPhongCachLam from "../components/PhongCachLam/ChildPhongCachLam";
import ModalPhongCachLam from "../components/PhongCachLam/ModalPhongCachLam";
import * as columsAction from "../store/actions/columsActions";
import _ from "lodash";
import { connect } from "react-redux";

interface Props {
  columsReducers: any;
  getColums: any;
}

interface State {}

class PhongCachLam extends Component<Props, State> {
  componentDidMount() {
    this.props.getColums("phongCachLam");
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({
    //   // computed
    //   [e.target.name]: e.target.value
    // });
  };

  render() {
    const { columsReducers } = this.props;
    // const {name: string } = this.state;
    console.log("PhongCachLam -> render -> columsReducers", columsReducers);

    return (
      <div className="page">
        <h2
          className="text-left my-3"
          style={{ fontSize: "18px", color: "#981a1e" }}
        >
          Danh sách phong cách làm
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
            <div className="col-4 px-0">
              <button
                className="btn btn-info text-left my-2"
                data-toggle="modal"
                data-target="#modelPhongCachLam"
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
        <div className="container">
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
                  {!_.isEmpty(columsReducers.columsName) &&
                    columsReducers.columsName.map(
                      (item: any, index: number) => <th key={index}>{item}</th>
                    )}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <ChildPhongCachLam />
              </tbody>
            </table>
          </div>
        </div>
        <ModalPhongCachLam />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getColums: (string: string) => {
      dispatch(columsAction.columsPhongCachLam(string));
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    columsReducers: state.columsReducers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhongCachLam);

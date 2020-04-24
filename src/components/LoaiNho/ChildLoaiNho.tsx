import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as loaiNhoAction from "../../store/actions/loaiNho.Actions";

interface Props {
  getLoaiNho: any;
  loaiNho: any;
}

interface State {}

class ChildLoaiNho extends Component<Props, State> {
  componentDidMount() {
    this.props.getLoaiNho();
  }
  render() {
    const { loaiNho } = this.props;
    return (
      <>
        {!_.isEmpty(loaiNho)
          ? loaiNho.map((loaiNho: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{loaiNho.ten}</td>
                <td>{loaiNho.ngayTao}</td>
                <td>{loaiNho.ngaySua}</td>
                <td>
                  <EditIcon />
                  <DeleteIcon />
                </td>
              </tr>
            ))
          : null}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLoaiNho: () => {
      dispatch(loaiNhoAction.getLoaiNho());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    loaiNho: state.loaiNhoReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildLoaiNho);

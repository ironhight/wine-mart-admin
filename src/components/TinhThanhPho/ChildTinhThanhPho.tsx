import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as tinhThanhPhoAction from "../../store/actions/tinhThanhPho.Actions";

interface Props {
  getTinhThanhPho: any;
  tinhThanhPho: any;
}

interface State {}
class ChildTinhThanhPho extends Component<Props, State> {
  componentDidMount() {
    this.props.getTinhThanhPho();
  }
  render() {
    const { tinhThanhPho } = this.props;
    return (
      <>
        {!_.isEmpty(tinhThanhPho)
          ? tinhThanhPho.map((tinhThanhPho: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{tinhThanhPho.ten}</td>
                <td>{tinhThanhPho.ngayTao}</td>
                <td>{tinhThanhPho.ngaySua}</td>
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
    getTinhThanhPho: () => {
      dispatch(tinhThanhPhoAction.getTinhThanhPho());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    tinhThanhPho: state.tinhThanhPhoReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildTinhThanhPho);

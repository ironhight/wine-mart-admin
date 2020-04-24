import React, { Component } from "react";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as DanhGiaSPAction from "../../store/actions/danhGiaSP.Actions";

interface Props {
  getDanhGiaSP: any;
  danhGiaSP: any;
}

interface State {}
class ChildDanhGiaSP extends Component<Props, State> {
  componentDidMount() {
    this.props.getDanhGiaSP();
  }
  render() {
    const { danhGiaSP } = this.props;
    return (
      <>
        {!_.isEmpty(danhGiaSP)
          ? danhGiaSP.map((DanhGiaSP: any, index: number) => (
              <tr key={index}>
                {/* <td>{index}</td> */}
                <td>{DanhGiaSP.danhMuc}</td>
                <td>{DanhGiaSP.name}</td>
                <td>{DanhGiaSP.name}</td>
                <td>{DanhGiaSP.name}</td>
                <td>{DanhGiaSP.id}</td>
                <td>{DanhGiaSP.ngaySua}</td>
                {/* <td>
                  <EditIcon />
                  <DeleteIcon />
                </td> */}
              </tr>
            ))
          : null}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDanhGiaSP: () => {
      dispatch(DanhGiaSPAction.getDanhGiaSP());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    danhGiaSP: state.danhGiaSpReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildDanhGiaSP);

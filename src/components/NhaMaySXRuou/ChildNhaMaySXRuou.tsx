import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as nhaMayAction from "../../store/actions/nhaMay.Actions";

interface Props {
  getNhaMay: any;
  NhaMay: any;
}

interface State {}
class ChildNhaMay extends Component<Props, State> {
  componentDidMount() {
    this.props.getNhaMay();
  }
  render() {
    const { NhaMay } = this.props;
    console.log("ChildNhaMay -> render -> NhaMay", NhaMay);

    return (
      <>
        {!_.isEmpty(NhaMay)
          ? NhaMay.map((NhaMay: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{NhaMay.ten}</td>
                <td>{NhaMay.ngayTao}</td>
                <td>{NhaMay.ngaySua}</td>
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
    getNhaMay: () => {
      dispatch(nhaMayAction.getNhaMay());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    NhaMay: state.nhaMayReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildNhaMay);

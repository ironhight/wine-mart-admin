import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as vungAction from "../../store/actions/vung.Actions";

interface Props {
  getvung: any;
  vung: any;
}

interface State {}
class ChildVung extends Component<Props, State> {
  componentDidMount() {
    this.props.getvung();
  }
  render() {
    const { vung } = this.props;
    return (
      <>
        {!_.isEmpty(vung)
          ? vung.map((vung: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{vung.ten}</td>
                <td>{vung.ngayTao}</td>
                <td>{vung.ngaySua}</td>
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
    getvung: () => {
      dispatch(vungAction.getVung());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    vung: state.vungReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildVung);

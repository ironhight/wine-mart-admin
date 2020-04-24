import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as quocGiaAction from "../../store/actions/quocGia.Actions";

interface Props {
  getQuocGia: any;
  quocGia: any;
}

interface State {}
class ChildQuocGia extends Component<Props, State> {
  componentDidMount() {
    this.props.getQuocGia();
  }
  render() {
    const { quocGia } = this.props;
    return (
      <>
        {!_.isEmpty(quocGia)
          ? quocGia.map((quocGia: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{quocGia.ten}</td>
                <td>{quocGia.ngayTao}</td>
                <td>{quocGia.ngaySua}</td>
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
    getQuocGia: () => {
      dispatch(quocGiaAction.getQuocGia());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    quocGia: state.quocGiaReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildQuocGia);

import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as thucAnKemAction from "../../store/actions/thucAnKem.Actions";

interface Props {
  getThucAn: any;
  thucAn: any;
}

interface State {}

class ChildThucAnKem extends Component<Props, State> {
  componentDidMount() {
    this.props.getThucAn();
  }
  render() {
    const { thucAn } = this.props;
    console.log("ChildThucAnKem -> render -> thucAn", thucAn);
    return (
      <>
        {!_.isEmpty(thucAn)
          ? thucAn.map((thucAn: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{thucAn.name}</td>
                <td>{thucAn.gia}</td>
                <td>
                  <img src={thucAn.hinhAnh} width="100px" alt="" />
                </td>
                <td>
                  {thucAn.state ? (
                    <div className="status-success">Đã kích hoạt</div>
                  ) : (
                    <div className="status-fail">Chưa kích hoạt</div>
                  )}
                </td>
                <td>{thucAn.diemReview}</td>
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
    getThucAn: () => {
      dispatch(thucAnKemAction.getThucAnKem());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    thucAn: state.thucAnKemReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildThucAnKem);

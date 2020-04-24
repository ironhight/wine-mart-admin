import React, { Component } from "react";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as DanhGiaThucAnAction from "../../store/actions/danhGiaThucAn.Actions";

interface Props {
  getDanhGiaThucAn: any;
  danhGiaThucAn: any;
}

interface State {}
class ChildDanhGiaThucAn extends Component<Props, State> {
  componentDidMount() {
    this.props.getDanhGiaThucAn();
  }
  render() {
    const { danhGiaThucAn } = this.props;
    return (
      <>
        {!_.isEmpty(danhGiaThucAn)
          ? danhGiaThucAn.map((DanhGiaThucAn: any, index: number) => (
              <tr key={index}>
                {/* <td>{index}</td> */}
                <td>{DanhGiaThucAn.danhMuc}</td>
                <td>{DanhGiaThucAn.name}</td>
                <td>{DanhGiaThucAn.name}</td>
                <td>{DanhGiaThucAn.name}</td>
                <td>{DanhGiaThucAn.id}</td>
                <td>{DanhGiaThucAn.ngaySua}</td>
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
    getDanhGiaThucAn: () => {
      dispatch(DanhGiaThucAnAction.getDanhGiaThucAn());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    danhGiaThucAn: state.danhGiaThucAnReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildDanhGiaThucAn);

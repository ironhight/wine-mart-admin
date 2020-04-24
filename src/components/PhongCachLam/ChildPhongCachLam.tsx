import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import _ from "lodash";
import * as PhongCachLamAction from "../../store/actions/phongCachLam.Actions";

interface Props {
  getPhongCachLam: any;
  phongCachLam: any;
}

interface State {}
class ChildPhongCachLam extends Component<Props, State> {
  componentDidMount() {
    this.props.getPhongCachLam();
  }
  render() {
    const { phongCachLam } = this.props;
    // console.log("ChildPhongCachLam -> render -> PhongCachLam", PhongCachLam);

    return (
      <>
        {!_.isEmpty(phongCachLam)
          ? phongCachLam.map((phongCachLam: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{phongCachLam.name}</td>
                <td>
                  <img src={phongCachLam.hinhAnh} width="120px" alt="" />
                </td>
                <td>{phongCachLam.ngayTao}</td>
                <td>{phongCachLam.ngaySua}</td>
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
    getPhongCachLam: () => {
      dispatch(PhongCachLamAction.getPhongCachLam());
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    phongCachLam: state.phongCachLamReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChildPhongCachLam);

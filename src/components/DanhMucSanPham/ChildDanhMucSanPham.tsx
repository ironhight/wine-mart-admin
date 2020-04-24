import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as DanhMucSpActions from "../../store/actions/danhMucSanPham.Actions";
import { connect } from "react-redux";
import _ from "lodash";

interface Props {
  DMSP: any;
  // getDMSP: any;
}

interface State {}

class ChildDanhMucSanPham extends Component<Props, State> {
  // componentDidMount() {
  //   this.props.getDMSP();
  // }

  render() {
    const { DMSP } = this.props;
    console.log("ChildDanhMucSanPham -> render -> DMSP", DMSP);

    return (
      <>
        {!_.isEmpty(DMSP)
          ? DMSP.map((product: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.hinhAnh} width="120px" alt="" />
                </td>
                <td>{product.ngayTao}</td>
                <td>{product.ngaySua}</td>
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

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getDMSP: () => {
//       dispatch(DanhMucSpActions.getDanhMucSP());
//     }
//   };
// };

// const mapStateToProps = (state: any) => {
//   return {
//     DMSP: state.danhMucSpReducer
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ChildDanhMucSanPham);

export default ChildDanhMucSanPham;

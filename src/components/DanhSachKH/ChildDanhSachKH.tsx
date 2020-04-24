import React, { Component } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import _ from "lodash";

interface Props {
  DSKH: any;
}

interface State {}
class ChildDanhSachKH extends Component<Props, State> {
  render() {
    const { DSKH } = this.props;

    return (
      <>
        {!_.isEmpty(DSKH)
          ? DSKH.map((user: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>
                  <img src={user.avatar} width="100px" alt="" />
                </td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.vi}</td>
                <td>{user.ngayTao}</td>
                <td>
                  <VisibilityIcon />
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

export default ChildDanhSachKH;

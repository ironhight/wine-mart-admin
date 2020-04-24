import React, { Component } from "react";

interface Props {
  keyWord: any;
  holder: string;
  id: string;
}

interface State {}

class Search extends Component<Props, State> {
  // _sendID = () => {
  //   this.props.parentCallback("")
  // }
  render() {
    const { holder, id } = this.props;

    return (
      <input
        type="text"
        placeholder={holder}
        id={id}
        onChange={e => {
          this.props.keyWord(e.target.value, id);
        }}
      />
    );
  }
}

export default Search;

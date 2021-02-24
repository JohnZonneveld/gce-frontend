import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMember } from "../actions/MemberActions";

class MemberDelete extends Component {
  onClick = () => {
    this.props.deleteMember(this.props.id);
  };

  render() {
    return (
      <>
        <button color="red" compact floated="right" onClick={this.onClick}>
          Delete
        </button>
      </>
    );
  }
}

export default connect(null, { deleteMember })(MemberDelete);
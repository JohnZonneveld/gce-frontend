import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMember } from "../actions/MemberActions";
import Button from 'react-bootstrap/Button'

class MemberDelete extends Component {
  onClick = () => {
    this.props.deleteMember(this.props.id);
  };

  render() {
    return (
      <>
        <Button variant="danger" onClick={this.onClick}>
          Delete
        </Button>
      </>
    );
  }
}

export default connect(null,{deleteMember})(MemberDelete);
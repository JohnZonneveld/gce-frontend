import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../actions/MemberActions";
import Button from 'react-bootstrap/Button'

class MemberAdd extends Component {
  onClick = () => {
    this.props.addMember(this.props.id);
  };

  render() {
    return (
      <>
        <br></br>
        <Button variant="success" onClick={this.onClick}>
          Add Member
        </Button>
      </>
    );
  }
}

export default connect(null,{addMember})(MemberAdd);
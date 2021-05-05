import React, { Component } from 'react'
import MembersList from '../components/MembersList'
import Button from 'react-bootstrap/Button'
import AddMember from '../components/AddMember'

class MembersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            tours: [],
            isAdding: false,
            isUpdated: false
        }
        this.toggleAdd = this.toggleAdd.bind(this)
        this.updateMemberState = this.updateMemberState.bind(this);
        this.saveMember = this.saveMember.bind(this);
    }

    handleOnSubmit = (e)=> {
        console.log('submit')
        e.preventDefault()
        this.toggleAdd()
        this.props.addMember(this.state.member);
    }

    toggleAdd() {
        console.log('add clicked')
        this.setState({
            isAdding: !this.state.isAdding
        })
    }

    updateMemberState(event) {
        const field = event.target.name;
        const member = this.state.member;
        member[field] = event.target.value;
        return this.setState({member: member});
    }

    saveMember(event) {
        event.preventDefault();
        this.props.actions.updateMember(this.state.member);
    }
  
    render () {
        if (!this.state.isAdding) {
            return (
                <div className="content">
                    <h1>Our Members</h1>
                    <MembersList />
                    <Button variant="success" onClick={this.toggleAdd}>Add Member</Button>
              </div>
            )
        } else {
            return (
                <AddMember />
            )
        }
      }
}
  
export default MembersContainer
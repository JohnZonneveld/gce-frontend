import React, { Component } from 'react'
import EditMember from './EditMember'
import {connect} from 'react-redux'
import { editMember } from '../actions/MemberActions'
import { Redirect } from 'react-router-dom'
import { deleteMember } from '../actions/MemberActions'
import MemberDelete from './MemberDelete'
import '../App.css'

class MemberPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            member: this.props.members.find(member => (member.id == this.props.match.params.id))
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.updateMemberState = this.updateMemberState.bind(this);
        this.saveMember = this.saveMember.bind(this);
    }    

    handleOnSubmit = (e)=> {
        console.log('submit')
        e.preventDefault()
        this.toggleEdit()
        this.props.editMember(this.state.member);
    }

    toggleEdit() {
        console.log('edit clicked')
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    updateMemberState(event) {
        // debugger
        const field = event.target.name;
        const member = this.state.member;
        member[field] = event.target.value;
        return this.setState({member: member});
    }

    saveMember(event) {
        event.preventDefault();
        this.props.actions.updateMember(this.state.member);
    }

    render() {
        const {members} = this.props
        var member = this.props.members.find(member => (member.id == this.props.match.params.id))
        if (this.state.isEditing) {
            return (
            <div className="content">
              <h1>Edit member</h1>
              <EditMember 
                member={this.state.member} 
                onSubmit={this.handleOnSubmit} 
                onChange={this.updateMemberState}
               /> 
            </div>
            )
        } else {
        return (
            <div className="content">
                <h1>Member Info: {member.name}</h1>
                <MemberDelete id={member.id} />
                <table>
                <tbody>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td></td>
                        <td>
                            {member.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Country:
                        </td>
                        <td></td>
                        <td>
                            {member.country}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Home Town:
                        </td>
                        <td></td>
                        <td>
                            {member.hometown}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bike:
                        </td>
                        <td></td>
                        <td>
                            {member.bike}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Role in Club:
                        </td>
                        <td></td>
                        <td>
                            {member.role}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bio:
                        </td>
                        <td></td>
                        <td>
                            {member.bio}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Birthday:
                        </td>
                        <td></td>
                        <td>
                            {member.birthday}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br></br>
                
                <button onClick={this.toggleEdit}>Edit Member</button>
                
            </div>
        );
        }
    }
        
    }

    const mapStateToProps = (state) => {
        return { 
            members: state.members 
        }
    }

export default connect(mapStateToProps, {editMember})(MemberPage)
import React, { Component } from 'react'
import MemberEdit from './MemberEdit'
import {connect} from 'react-redux'
import { editMember, updateMember } from '../actions/MemberActions'
import { Redirect } from 'react-router-dom'
import { deleteMember } from '../actions/MemberActions'
import MemberDelete from './MemberDelete'
import '../App.css'
import Button from 'react-bootstrap/Button';

class MemberPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            member: this.props.members.find(member => (member.id == this.props.match.params.id))
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        // this.updateMemberState = this.updateMemberState.bind(this);
        this.saveMember = this.saveMember.bind(this);
    } 

    handleSubmit = (e)=> {
        debugger
        console.log('submit')
        debugger
        e.preventDefault()
        this.props.editMember(this.state.member);
        this.toggleEdit()
    }

    toggleEdit() {
        console.log('edit clicked')
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    
    handleChange = event => {
    this.setState({ member: {
        ...this.state.member,
        [event.target.name]: event.target.value
    }
    })
    }

    saveMember(event) {
        event.preventDefault();
        this.props.updateMember(this.state.member);
    }

    render() {
        let {members} = this.props
        if (members == undefined) {
            return (
                <Redirect to='/members' />
            )
        }
        var member = this.props.members.find(member => (member.id == this.props.match.params.id))
        if (this.state.isEditing) {
            return (
            <div className="content">
              <h1>Edit member</h1>
              <MemberEdit 
                member={this.state.member}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} 
                />        
            </div>
            )
        } else {
        return (
            <div className="content">
                <h1>Member Info: {member.name}</h1>
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
                            {member.birthdate}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br></br>
                
                <Button variant="success" onClick={this.toggleEdit}>Edit Member</Button>
                <MemberDelete id={member.id} />
                
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

export default connect(mapStateToProps, {editMember, updateMember})(MemberPage)

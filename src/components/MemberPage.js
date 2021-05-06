import React, { Component } from 'react'
import {connect} from 'react-redux'
import MemberEdit from './MemberEdit'
import { editMember, updateMember } from '../actions/MemberActions'
import { Redirect } from 'react-router-dom'
// import { deleteMember } from '../actions/MemberActions'
import MemberDelete from './MemberDelete'
import '../App.css'
import Button from 'react-bootstrap/Button';

class MemberPage extends Component {

    // constructor(props, context) {
    //     debugger
    //     super(props, context)
    //     this.state = {
    //         isEditing: false,
    //         member: this.props.members.find(member => (member.id == this.props.match.params.id))
    //     }
    //     this.toggleEdit = this.toggleEdit.bind(this)
    //     this.updateMemberState = this.updateMemberState.bind(this);
    //     this.saveMember = this.saveMember.bind(this);
    // }
    constructor(props, context) {
        super(props, context);
        this.state = {
            member: this.props.member, 
            saving: false,
            isEditing: false
        };
        this.toggleEdit = this.toggleEdit.bind(this)
    } 

    handleSubmit = (e)=> {
        debugger
        console.log('submit')
        // debugger
        e.preventDefault()
        this.props.editMember(this.state.member);
        this.toggleEdit()
    }

    toggleEdit() {
        console.log('edit clicked')
        // debugger
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.members !== this.state.members) {
            console.log('members state has changed')
        }
    }

    render() {
        // debugger
        var member = this.props.member
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

    const mapStateToProps = (state, ownProps) => {
        let memberToDisplay = {name: '', hometown: '', country: '', bike: '', email: '', bio: '', birthdate: '', role: '', id: ''}
        const memberId = ownProps.match.params.id
        // debugger
        if (state.members.length > 0) {
            memberToDisplay = Object.assign({}, state.members.find(member => member.id == memberId))
            return { 
                member: memberToDisplay
            }
        } else {
            // debugger
        }
    }

export default connect(mapStateToProps, {editMember, updateMember})(MemberPage)

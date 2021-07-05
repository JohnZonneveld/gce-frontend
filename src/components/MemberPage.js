import React, { Component } from 'react'
import {connect} from 'react-redux'
import MemberEdit from './MemberEdit'
import { editMember, deleteMember } from '../actions/MemberActions'
import '../App.css'
import Button from 'react-bootstrap/Button';
import ToursList from './ToursList'

class MemberPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            member: this.props.member, 
            saving: false,
            isEditing: false,
            isAdding: false
        };
        this.toggleEdit = this.toggleEdit.bind(this)
        this.deleteMember = this.deleteMember.bind(this);
    } 

    handleEditSubmit = (event)=> {
        console.log('submit')
        event.preventDefault()
        this.props.editMember(this.state.member,this.history);
        this.toggleEdit()
    }

    handleAddingSubmit = (event)=> {
        console.log('submit')
        event.preventDefault()
        this.props.createMember(this.state.member);
        this.toggleAdd()
    }

    toggleEdit() {
        console.log('edit clicked')
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    
    handleChange = event => {
        this.setState({ 
            member: {
                ...this.state.member,
                [event.target.name]: event.target.value
            }
        })
    }

    deleteMember(event) {
        this.props.deleteMember(this.state.member, this.props.history)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.members !== this.state.members) {
            console.log('members state has changed')
        }
    }

    render() {
        let member = this.props.member
        let membertours = this.props.membertours
        if (this.state.isEditing) {
            return (
            <div className="content">
                <h1>Edit member</h1>
                <MemberEdit 
                    member={this.state.member}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleEditSubmit} 
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
                                    Email:
                                </td>
                                <td></td>
                                <td>
                                    {member.email}
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
                    
                    <Button 
                        variant="success" 
                        onClick={this.toggleEdit}>
                         Edit 
                    </Button>
                    <Button 
                        variant="danger"
                        onClick={this.deleteMember} 
                        className="btn btn-default">
                        Delete
                    </Button>
                    <br></br><br></br>
                    {!!membertours.length  ? 'Tours organized by '+ member.name : null}
                    <ToursList tours={membertours} />
                </div>
            );
        }
    }   
}

const mapStateToProps = (state, ownProps) => {
    if (state.members.length > 0) {
        const memberId = ownProps.match.params.id
        const memberToDisplay = Object.assign({}, state.members.find(member => member.id == memberId))
        const memberTours = state.tours.filter(tour => tour.member_id == memberId)
        return { 
            member: memberToDisplay,
            membertours: memberTours
        }
    } 
}

export default connect(mapStateToProps, {editMember, deleteMember})(MemberPage)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import TourEdit from './TourEdit'
import { editTour, deleteTour } from '../actions/TourActions'
import '../App.css'
import Button from 'react-bootstrap/Button';

class TourPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            tour: this.props.tour, 
            isEditing: false,
            isAdding: false
        };
        this.toggleEdit = this.toggleEdit.bind(this)
        this.deleteTour = this.deleteTour.bind(this);
    } 

    handleEditSubmit = (event)=> {
        console.log('submit')
        event.preventDefault()
        this.props.editTour(this.state.tour,this.history);
        this.toggleEdit()
    }

    handleAddingSubmit = (event)=> {
        console.log('submit')
        event.preventDefault()
        this.props.createTour(this.state.tour);
        this.toggleAdd()
    }

    toggleEdit() {
        console.log('edit clicked')
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    
    handleChange = (event) => {
        this.setState({ 
            tour: {
                ...this.state.tour,
                [event.target.name]: event.target.value
            }
        })
    }

    handleDate = (event) => {
        this.setState({
            tour: {
                ...this.state.tour,
                date: event
            }
        })
    }

    deleteTour(event) {
        this.props.deleteTour(this.state.tour, this.props.history)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tours !== this.state.tours) {
            console.log('tours state has changed')
        }
    }

    render() {
        var tour = this.props.tour
        if (this.state.isEditing) {
            return (
            <div className="content">
                <h1>Edit tour</h1>
                <TourEdit 
                    tour={this.state.tour}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleEditSubmit} 
                    handleDate={this.handleDate}
                />        
            </div>
            )
        } else {
            return (
                <div className="content">
                    <h1>Tour Info: {tour.name}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Name:
                                </td>
                                <td></td>
                                <td>
                                    {tour.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Country:
                                </td>
                                <td></td>
                                <td>
                                    {tour.country}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Organizer:
                                </td>
                                <td></td>
                                <td>
                                    <Link to ={'/members/' + this.props.member[0].id}>{this.props.member[0].name}</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Date:
                                </td>
                                <td></td>
                                <td>
                                    <span>
                                        {(new Date(tour.date)).toLocaleDateString() }
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Duration:
                                </td>
                                <td></td>
                                <td>
                                    {tour.duration}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Hotel Name:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Adress:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_address}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Town:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_town}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Zipcode:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_zipcode}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Website:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_web}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Telephone:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_telephone}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Fax:
                                </td>
                                <td></td>
                                <td>
                                    {tour.hotel_fax}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Additional Info:
                                </td>
                                <td></td>
                                <td>
                                    {tour.additional_info}
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
                        onClick={this.deleteTour} 
                        className="btn btn-default">
                        Delete
                    </Button>
                    
                </div>
            );
        }
    }   
}

const mapStateToProps = (state, ownProps) => {
    if (state.tours.length > 0) {
        const tourId = ownProps.match.params.id
        const tourToDisplay = Object.assign({}, state.tours.find(tour => tour.id == tourId))
        var member = state.members.filter(member => {
            return member.id === tourToDisplay.member_id
        })
        return { 
            tour: tourToDisplay,
            member: member
        }
    } 
}

export default connect(mapStateToProps, {editTour, deleteTour})(TourPage)

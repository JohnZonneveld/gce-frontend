import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import TourEdit from './TourEdit'
import { editTour, updateTour, deleteTour } from '../actions/TourActions'
import '../App.css'
import Button from 'react-bootstrap/Button';

class TourPage extends Component {

    constructor(props, context) {
        debugger
        super(props, context);
        this.state = {
            tour: this.props.tour, 
            saving: false,
            isEditing: false,
            isAdding: false
        };
        this.toggleEdit = this.toggleEdit.bind(this)
        this.deleteTour = this.deleteTour.bind(this);
    } 

    handleEditSubmit = (e)=> {
        debugger
        console.log('submit')
        e.preventDefault()
        this.props.editTour(this.state.tour,this.history);
        this.toggleEdit()
    }

    handleAddingSubmit = (e)=> {
        console.log('submit')
        e.preventDefault()
        this.props.createTour(this.state.tour);
        this.toggleAdd()
    }

    toggleEdit() {
        console.log('edit clicked')
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    
    handleChange = event => {
        debugger
    this.setState({ tour: {
        ...this.state.tour,
        [event.target.name]: event.target.value
    }
    })
    }

    saveTour(event) {
        event.preventDefault();
        this.props.updateTour(this.state.tour);
    }

    deleteTour(event) {
        debugger
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
                />        
            </div>
            )
        } else {
            debugger
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
                                    {tour.date}
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
                    
                    <Button variant="success" onClick={this.toggleEdit}> Edit </Button>
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
    debugger
    if (state.tours.length > 0) {
        const tourId = ownProps.match.params.id
        const tourToDisplay = Object.assign({}, state.tours.find(tour => tour.id == tourId))
        var member = state.members.filter(member => {
            return member.id === tourToDisplay.member_id
        })
        debugger
        // const organzier = Object.assign({}, state.members.find(member => member.id == tour.member_id))
        return { 
            tour: tourToDisplay,
            member: member
        }
    } else {
        debugger 
    }
}

export default connect(mapStateToProps, {editTour, updateTour, deleteTour})(TourPage)

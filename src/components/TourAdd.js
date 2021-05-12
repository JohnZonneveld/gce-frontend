import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTour } from '../actions/TourActions'
import TourForm from './TourForm'

class TourAdd extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tour: {
                name: '',
                country: '',
                member_id: '',
                date: '',
                duration: '',
                hotel_name: '',
                hotel_address: '',
                hotel_town: '',
                hotel_zipcode: '',
                hotel_website: '',
                hotel_email: '',
                hotel_telephone: '',
                hotel_fax: '',
                additional_info: ''
            },
            // saving: false,
            isAdding: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        let testTour = await this.props.createTour(this.state.tour, this.props.history)
    }

    handleChange = event => {
        debugger
        this.setState({ 
            tour: {
                ...this.state.tour,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <TourForm 
                    tour = {this.state.tour}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default connect (null,{createTour})(TourAdd)
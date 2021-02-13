import React, { Component } from 'react';
 
class TourForm extends Component {
 
    constructor() {
        super();
        this.state = {
            tour_name: '',
            country: '',
            date: '',
            duration: '',
            hotel_name: '',
            hotel_address: '',
            hotel_town: '',
            hotel_zipcode: '',
            hotel_web: '',
            hotel_email: '',
            hotel_telephone: '',
            hotel_fax: '',
            additional_info: ''
        };
    }
 
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <p>
                    <label>Tour name:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.tour_name}/>
                    </p>
                    <p>
                    <label>Country:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.country}/>
                    </p>
                    <p>
                    <label>Date:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.date}/>
                    </p>
                    <p>
                    <label>Duration:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.duration}/>
                    </p>
                    <p>
                    <label>Hotel Name:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_name}/>
                    </p>
                    <p>
                    <label>Hotel Address:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_address}/>
                    </p>
                    <p>
                    <label>Hotel Town:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_town}/>
                    </p>
                    <p>
                    <label>Hotel Zip Code:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_zip}/>
                    </p>
                    <p>
                    <label>Hotel Website:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_web}/>
                    </p>
                    <p>
                    <label>Hotel Email:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_email}/>
                    </p>
                    <p>
                    <label>Hotel Telephone:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_telephone}/>
                    </p>
                    <p>
                    <label>Hotel Fax:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.hotel_fax}/>
                    </p>
                    <p>
                    <label>Info:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.additional_info}/>
                    </p>
                    <input type="submit" />
                </form>
                {/* {this.state.text} */}
            </div>
        );
    }
};
 
export default TourForm;
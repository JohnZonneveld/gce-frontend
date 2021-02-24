import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
 
class TourForm extends Component {
 
    constructor() {
        super();
        this.state = {
            name: '',
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
            <div className="content">
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Tour name:</Form.Label>
                        <Col sm="6">
                        <Form.Control
                            name="tour_name"
                            type="text"
                            onChange={this.handleChange} value={this.state.tour_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Country:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="country"
                                type="text"
                                onChange={this.handleChange} value={this.state.country}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Date:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="date"
                                type="text"
                                onChange={this.handleChange} value={this.state.date}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Duration:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="duration"
                                type="text"
                                onChange={this.handleChange} value={this.state.duration}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Name:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_name"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Address:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_address"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_address}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Town:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_town"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_town}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Zip Code:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_zip"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_zip}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Website:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_web"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_web}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Email:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_email"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_email}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Telephone:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_telephone"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_telephone}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Fax:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_fax"
                                type="text"
                                onChange={this.handleChange} value={this.state.hotel_fax}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                    <Form.Label  column sm="2">Info:</Form.Label>
                        <Col sm="6">
                            <Form.Control as="textarea"
                                name="additional_info"
                                style={{height: '200px', width: '672px'}}
                                type="text"
                                onChange={this.handleChange} value={this.state.additional_info}/>
                        </Col>
                    </Form.Group>
                    <input type="submit" />
                </Form>
                {/* {this.state.text} */}
            </div>
        );
    }
};
 
export default TourForm;
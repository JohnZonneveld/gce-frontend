import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Col, Row } from 'react-bootstrap';
import Select from 'react-select'
import { Button } from 'react-bootstrap'
 
class TourForm extends Component {
 
    constructor(props) {
        super(props);
        // this.state = {
            
        // };
    }
 
    render() {
        debugger
        return(
            <div className="content">
                <Form onSubmit={event => this.props.onSubmit(event)}>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Tour name:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="name"
                                type="text"
                                onChange={this.props.onChange} value={this.props.tour_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Country:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="country"
                                type="text"
                                onChange={this.props.onChange} value={this.props.country}/>
                        </Col>
                    </Form.Group>
                    <Form.Label column sm="2">
                                Organizer: 
                            </Form.Label>
                            
                            <Select 
                                options={this.props.members.map(member => {
                                return { value : member.name, label: member.name, target: {value: member.id, name: "member_id"}}
                                })}
                                onChange={event => this.props.onChange(event)} 
                                // defaultValue={{label: currentMemberObject[0].name, value: currentMemberObject[0].name}}
                                name="member_id"
                            >          
                                {this.props.members.map(member => (
                                    <option 
                                        member_id={member.id} 
                                        value={member.id} 
                                    >
                                        {member.name}
                                    </option>
                                ))}
                            </Select>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Date:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="date"
                                type="text"
                                onChange={this.props.onChange} value={this.props.date}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Duration:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="duration"
                                type="text"
                                onChange={this.props.onChange} value={this.props.duration}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Name:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_name"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Address:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_address"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_address}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Town:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_town"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_town}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Zip Code:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_zip"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_zip}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Website:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_web"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_web}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Email:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_email"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_email}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Telephone:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_telephone"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_telephone}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                        <Form.Label  column sm="2">Hotel Fax:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="hotel_fax"
                                type="text"
                                onChange={this.props.onChange} value={this.props.hotel_fax}/>
                        </Col>
                    </Form.Group>
                    <Form.Group  as={Row}>
                    <Form.Label  column sm="2">Info:</Form.Label>
                        <Col sm="6">
                            <Form.Control as="textarea"
                                name="additional_info"
                                style={{height: '200px', width: '672px'}}
                                type="text"
                                onChange={this.props.onChange} value={this.props.additional_info}/>
                        </Col>
                    </Form.Group>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
};
 
function mapStateToProps(state, ownProps) {
    return {
        members: state.members
    };
}

  export default connect(mapStateToProps)(TourForm)
import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap'


class MemberForm extends Component {
 
    constructor() {
        super();
        this.state = {
            name: '',
            country: '',
            birthdate: '',
            bike: '',
            email: '',
            additional_info: ''
        };
    }
 
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { editMode, member } = this.props
        const title = this.titleRef.value
        const body = this.bodyRef.value
        if (this.props.addM === true) {
            this.props.addMember(this.state);
        } else {
            this.props.editMember(this.state)
        }
      };
 
    render() {
        return(
            <div className="content">
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Name:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="name"
                                type="text"
                                onChange={this.handleChange} value={this.state.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Country:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                    name="country"
                                    type="text"
                                    onChange={this.handleChange} value={this.state.country}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Birthday:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="birthdate"
                                type="text"
                                onChange={this.handleChange} value={this.state.birthdate}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Bike:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                            name="bike"
                            type="text"
                            onChange={this.handleChange} value={this.state.bike}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Email:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                            name="email"
                            type="text"
                            onChange={this.handleChange} value={this.state.email}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Info:</Form.Label>
                        <Col sm="6">
                            <Form.Control as="textarea"
                            name="additional_info"
                            style={{height: '200px', width: '700px'}}
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
 
export default MemberForm;
import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap'


class MemberForm extends Component {
 
    constructor(props) {
        debugger
        super(props);
    }

    render() {
        debugger
        return(
            <div className="content">
                <Form onSubmit={event => this.props.onSubmit(event)}>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Name:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="name"
                                type="text"
                                onChange={this.props.onChange} value={this.props.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Country:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                    name="country"
                                    type="text"
                                    onChange={this.props.onChange} value={this.props.country}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Birthday:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                name="birthdate"
                                type="text"
                                onChange={this.props.onChange} value={this.props.birthdate}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Bike:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                            name="bike"
                            type="text"
                            onChange={this.props.onChange} value={this.props.bike}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Email:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                            name="email"
                            type="text"
                            onChange={this.props.onChange} value={this.props.email}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Role:</Form.Label>
                        <Col sm="6">
                            <Form.Control
                            name="role"
                            type="text"
                            onChange={this.props.onChange} value={this.props.role}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="1">Bio:</Form.Label>
                        <Col sm="6">
                            <Form.Control as="textarea"
                            name="bio"
                            style={{height: '200px', width: '700px'}}
                            type="text"
                            onChange={this.props.onChange} value={this.props.bio}/>
                        </Col>
                    </Form.Group>
        
                    <input type="submit" />
                </Form>
            </div>
        );
    }
};
 
export default MemberForm;
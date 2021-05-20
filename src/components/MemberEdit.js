import React, { Component } from 'react'
import { Button, Container, Form, Col, Row } from 'react-bootstrap'


class MemberEdit extends Component {

    render() {
        return (
            <div className="content">
                <Container>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Form.Group as={Row} >
                            <Form.Label column sm="2">Name:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    size="md"
                                    type="text"
                                    name="name"
                                    value={this.props.member.name}
                                    placeholder="Name"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Country:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="country"
                                    value={this.props.member.country}
                                    placeholder="Country"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Hometown:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="hometown"
                                    value={this.props.member.hometown}
                                    placeholder="Hometown"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Bike:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="bike"
                                    value={this.props.member.bike}
                                    placeholder="Bike"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Role in Group:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="role"
                                    value={this.props.member.role}
                                    placeholder="Role"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Email:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="email"
                                    value={this.props.member.email}
                                    placeholder="Email"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Bio:</Form.Label>
                            <Col sm="6">
                                <Form.Control as="textarea"
                                    style={{height: '200px', width: '600px'}}
                                    name="bio"
                                    value={this.props.member.bio}
                                    placeholder="Bio"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Birthdate:</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                    type="text"
                                    name="birthdate"
                                    value={this.props.member.birthdate}
                                    placeholder="Birthdate"
                                    onChange={event => this.props.handleChange(event)} />
                            </Col>
                        </Form.Group>
                            <br></br>
                            <Button variant="success" type="submit">Submit</Button>            
                    </Form>
                </Container>
            </div>
        )
    }
}

  export default MemberEdit

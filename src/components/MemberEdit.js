import React, { Component } from 'react'
import { Button, Container, Form, Col } from 'react-bootstrap'


class MemberEdit extends Component {

    render() {
        return (
            <div className="content">
                <Container>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Col xs={5}>
                            <Form.Label column sm="2">
                                Name: 
                            </Form.Label>
                            <Form.Control 
                                size="md"
                                type="text"
                                name="name"
                                value={this.props.member.name}
                                placeholder="Name"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Country: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="country"
                                value={this.props.member.country}
                                placeholder="Country"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Hometown: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hometown"
                                value={this.props.member.hometown}
                                placeholder="Hometown"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Bike: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="bike"
                                value={this.props.member.bike}
                                placeholder="Bike"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="10">
                                Role in Group: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="role"
                                value={this.props.member.role}
                                placeholder="Role"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="10">
                                Email: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="email"
                                value={this.props.member.email}
                                placeholder="Email"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Bio:
                            </Form.Label>
                            <Form.Control as="textarea"
                                style={{height: '200px', width: '600px'}}
                                name="bio"
                                value={this.props.member.bio}
                                placeholder="Bio"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Birthdate: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="birthdate"
                                value={this.props.member.birthdate}
                                placeholder="Birthdate"
                                onChange={event => this.props.handleChange(event)}
                            />
                        </Col>
                        <br></br>
                        <Button type="submit">Submit</Button>            
                    </Form>
                </Container>
            </div>
        )
    }
}

// const mapStateToProps = state => {

//     return {
//       members: state.members,
//       loading: state.loading
//     }
// }

  export default MemberEdit

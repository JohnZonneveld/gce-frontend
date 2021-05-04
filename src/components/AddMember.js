import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addMember } from '../actions/MemberActions'

class AddMember extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            member: {
                name: '',
                country: '',
                hometown: '',
                bike: '',
                role: '',
                bio: '',
                birthday: ''
            },
            saving: false
        }
    }

    resetInputFields = () => {
        this.setState({ inputs: {} })
    }

    onChange = (event) => {
        this.setState({ member: {
            ...this.state.member,
            [event.target.name]: event.target.value
        }
        })
    }

    onSubmit = (event) => {
        this.props.addMember(this.state.member)
    }

    render() {
        return (
            <div className="content">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.onChange}
                        />
                        <Form.Label>Country: </Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={this.state.country}
                            placeholder="Country"
                            onChange={this.onChange}
                        />
                        <Form.Label>HomeTown: </Form.Label>
                        <Form.Control
                            type="text"
                            name="hometown"
                            value={this.state.hometown}
                            placeholder="Hometown"
                            onChange={this.onChange}
                        />
                        <Form.Label>Bike: </Form.Label>
                        <Form.Control
                            type="text"
                            name="bike"
                            value={this.state.bike}
                            placeholder="Bike"
                            onChange={this.onChange}
                        />
                        <Form.Label>Role: </Form.Label>
                        <Form.Control
                            type="text"
                            name="role"
                            value={this.state.role}
                            placeholder="Role"
                            onChange={this.onChange}
                        />
                        <Form.Label>Bio: </Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            name="bio"
                            value={this.state.bio}
                            placeholder="Bio"
                            onChange={this.onChange}
                        />
                        <Form.Label>Birthdate: </Form.Label>
                        <Form.Control
                            type="text"
                            name="birthday"
                            value={this.state.birthdate}
                            placeholder="Birthdate"
                            onChange={this.onChange}
                        />
                    </Form.Group> 
                    <button type="submit">Submit</button>  
                    {/* <button type="submit" onSubmit={this.props.toggle}>Submit</button>  */}
                </Form>
            </div>
        )
    }
}

export default connect (null, {addMember})(AddMember)
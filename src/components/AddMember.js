import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addMember} from '../actions/memberActions'

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

    render() {
        return (
            <div className="content">
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>Country: </Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={this.state.country}
                            placeholder="Country"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>HomeTown: </Form.Label>
                        <Form.Control
                            type="text"
                            name="hometown"
                            value={this.state.hometown}
                            placeholder="Hometown"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>Bike: </Form.Label>
                        <Form.Control
                            type="text"
                            name="bike"
                            value={this.state.bike}
                            placeholder="Bike"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>Role: </Form.Label>
                        <Form.Control
                            type="text"
                            name="role"
                            value={this.state.role}
                            placeholder="Role"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>Bio: </Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            name="bio"
                            value={this.state.bio}
                            placeholder="Bio"
                            onChange={this.props.onChange}
                        />
                        <Form.Label>Birthday: </Form.Label>
                        <Form.Control
                            type="text"
                            name="birthday"
                            value={this.state.birthday}
                            placeholder="Birthday"
                            onChange={this.props.onChange}
                        />
                    </Form.Group> 
                    <button type="submit">Submit</button>  
                    {/* <button type="submit" onSubmit={this.props.toggle}>Submit</button>  */}
                </Form>
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

// export default connect(mapStateToProps)(AddMember);
export default AddMember
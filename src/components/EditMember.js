import React, { Component } from 'react'
import { Container, Form, Col } from 'react-bootstrap'


class EditMember extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member: this.props.member
        }
    }

    render() {
        return (
            <div className="content">
            <form  onSubmit={this.props.onSubmit}>
            <Container>
            <Form>
                <Col xs={5}>
                <Form.Label column sm="2">
                    Name: 
                </Form.Label>
                <Form.Control 
                    size="md"
                    type="text"
                    name="name"
                    value={this.state.member.name}
                    placeholder="Name"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="2">
                    Country: 
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="country"
                    value={this.state.member.country}
                    placeholder="Country"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="2">
                    Hometown: 
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="hometown"
                    value={this.state.member.hometown}
                    placeholder="Hometown"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="2">
                    Bike: 
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="bike"
                    value={this.state.member.bike}
                    placeholder="Bike"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="10">
                    Role in Group: 
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="role"
                    value={this.state.member.role}
                    placeholder="Role"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="2">
                    Bio:
                </Form.Label>
                <Form.Control as="textarea"
                    style={{height: '200px', width: '600px'}}
                    name="bio"
                    value={this.state.member.bio}
                    placeholder="Bio"
                    onChange={this.props.onChange}
                />
                <Form.Label column sm="2">
                    Birthday: 
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="birthday"
                    value={this.state.member.birthday}
                    placeholder="Birthday"
                    onChange={this.props.onChange}
                />
                </Col>
            </Form>
            </Container>
            <br></br>
            <button type="submit" onSubmit={this.props.toggle}>Submit</button>
            </form>
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

  export default EditMember

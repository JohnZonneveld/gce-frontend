import React, { Component } from 'react'
import { Button, Container, Form, Col, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import Select from 'react-select'


class TourEdit extends Component {


    render() {
        const currentMemberObject = this.props.members.filter(member => member.id === this.props.tour.member_id)
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
                                value={this.props.tour.name}
                                placeholder="Name"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Country: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="country"
                                value={this.props.tour.country}
                                placeholder="Country"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Organizer: 
                            </Form.Label>
                            <Select className="mt-4 col-md-8 col-offset-4"
                                options={this.props.members.map(member => {
                                    // added target: {value: mmber.id, name: "member_id"} to make use of the handleChange(event) 
                                    // used in all the other form fields
                                    return { value : member.name, label: member.name, target: {value: member.id, name: "member_id"}}
                                    })
                                }
                                onChange={event => this.props.handleChange(event)}
                                // currentMemberObject is an array with only one Object, to get to that we have to use the index notation
                                // to be able to access the object values
                                defaultValue={{label: currentMemberObject[0].name, value: currentMemberObject[0].name}}
                                name="member_id"
                            >
                                {/* {this.props.members.map(member => (
                                    <option 
                                        key={member.id}
                                        member_id={member.id} 
                                        value={member.id} 
                                    >
                                        {member.name}
                                    </option>
                                ))} */}
                            </Select>
        
                            <Form.Label column sm="2">
                                Date: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="date"
                                value={this.props.tour.date}
                                placeholder="Date"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Duration: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="duration"
                                value={this.props.tour.duration}
                                placeholder="Duration"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="10">
                                Hotel Name: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_name"
                                value={this.props.tour.hotel_name}
                                placeholder="Hotel Name"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="10">
                                Address: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_address"
                                value={this.props.tour.hotel_address}
                                placeholder="Email"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Town: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_town"
                                value={this.props.tour.hotel_town}
                                placeholder="Town"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Zipcode: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="zipcode"
                                value={this.props.tour.hotel_zipcode}
                                placeholder="Zipcode"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Website: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_website"
                                value={this.props.tour.hotel_website}
                                placeholder="Website"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Email: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_email"
                                value={this.props.tour.hotel_email}
                                placeholder="Email"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Telephone: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_telephone"
                                value={this.props.tour.hotel_telephone}
                                placeholder="Telephone"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Fax: 
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                name="hotel_fax"
                                value={this.props.tour.hotel_fax}
                                placeholder="Fax"
                                onChange={event => this.props.handleChange(event)}
                            />
                            <Form.Label column sm="2">
                                Additional Info:
                            </Form.Label>
                            <Form.Control as="textarea"
                                style={{height: '200px', width: '600px'}}
                                name="additional_info"
                                value={this.props.tour.town}
                                placeholder="additional_info"
                                onChange={event => this.props.handleChange(event)}
                            />
                            
                        </Col>
                        <br></br>
                        <Button 
                            variant="success"
                            type="submit">
                            Submit
                        </Button>            
                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        members: state.members
    };
}

  export default connect(mapStateToProps)(TourEdit)

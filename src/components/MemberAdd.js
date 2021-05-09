import React, { Component } from 'react'
// import Form  from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { createMember } from '../actions/MemberActions'
// import MemberPage from './MemberPage'
import MemberForm from './MemberForm'

class MemberAdd extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            member: {
                name: '',
                country: '',
                hometown: '',
                email: '',
                bike: '',
                role: '',
                bio: '',
                birthday: ''
            },
            saving: false,
            isAdding: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        let testMember = await this.props.createMember(this.state.member, this.props.history)
    }

    handleChange = event => {
        this.setState({ 
            member: {
                ...this.state.member,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        debugger
        return (
            <div>
                <MemberForm 
                    member = {this.state.member}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default connect (null,{createMember})(MemberAdd)
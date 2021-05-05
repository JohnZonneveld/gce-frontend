import React, { Component } from 'react'
import { connect } from 'react-redux'
import Member from '../components/Member'
// import MemberDelete from './MemberDelete'
// import Button from 'react-bootstrap/Button'
import {fetchMembers} from '../actions/MemberActions'

class MembersList extends Component {

    componentDidMount() {
        debugger
        console.log("firing")
        // if (this.props.members[0].id == '') {
            this.props.fetchMembers();
        // }
    }

    render() {
        debugger
        const  members  = this.props.members
        if (!members) {
            return <p>Loading...</p>
        }
        else {
            return (
                this.props.members.map(member => 
                    <li key={member.id}>
                        <Member 
                            name = {member.name}
                            id = {member.id}
                            role = {member.role}
                        />
                    </li>
                ) 
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    // if (state.members.length > 0) {
        return { members: state.members }
    // } else {
    //     return {
    //         members: [{id: '', 
    //             name: '', 
    //             email: '',
    //             hometown: '', 
    //             country: ',',
    //             role: '', 
    //             bike: '', 
    //             bio: '',
    //             birthdate: '' 
    //             //, tours: []
    //         }]
    // }
    // }

}

export default connect(mapStateToProps,{fetchMembers})(MembersList)
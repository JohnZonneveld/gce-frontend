import React, { Component } from 'react'
import { connect } from 'react-redux'
import Member from '../components/Member'
import MemberDelete from './MemberDelete'

class MembersList extends Component {
    render() {
        const { members } = this.props
        if (!members) {
            return <p>Loading...</p>
        }
        
        return (
            members.map(member => 
                <Member 
                    name ={member.name}
                    id = {member.id}
                    role = {member.role}
                />
            ) 
        
        )
        
    }
}

const mapStateToProps = (state) => {
    return { members: state.members }
}

export default connect(mapStateToProps)(MembersList)
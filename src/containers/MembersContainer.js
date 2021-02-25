import React, { Component } from 'react'
import MembersList from '../components/MembersList'
import MemberAdd from '../components/MemberAdd'
import { fetchMembers } from '../actions/MemberActions';
import { connect } from 'react-redux'

class MembersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            tours: [],
            isAdding: false
        }
        this.toggleAdd = this.toggleAdd.bind(this)
        this.updateMemberState = this.updateMemberState.bind(this);
        this.saveMember = this.saveMember.bind(this);
    }

    handleOnSubmit = (e)=> {
        console.log('submit')
        e.preventDefault()
        this.toggleAdd()
        this.props.addMember(this.state.member);
    }

    toggleAdd() {
        console.log('add clicked')
        this.setState({
            isAdding: !this.state.isAdding
        })
    }

    updateMemberState(event) {
        // debugger
        const field = event.target.name;
        const member = this.state.member;
        member[field] = event.target.value;
        return this.setState({member: member});
    }

    saveMember(event) {
        event.preventDefault();
        this.props.actions.updateMember(this.state.member);
    }

    componentDidMount() {
        this.props.fetchMembers() 
    }
  
    render () {
        return (
            <div className="content">
                <h1>Our Members</h1>
                <MembersList />
                <MemberAdd />
          </div>
        )
        }
}
  
export default connect(null, {fetchMembers})(MembersContainer)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MembersList from '../components/members/MembersList'
// import MemberAdd from '../components/members/MemberAdd'
import { fetchMembers, addMember } from '../actions/memberActions';

import Button from 'react-bootstrap/Button'
import AddMember from '../components/members/AddMember'

class MembersPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         members: [],
    //         tours: [],
    //         isAdding: false
    //     }
    //     this.toggleAdd = this.toggleAdd.bind(this)
        
    //     this.saveMember = this.saveMember.bind(this);
    // }

    // handleOnSubmit = (e)=> {
    //     console.log('add submit')
    //     e.preventDefault()
    //     this.toggleAdd()
    //     this.props.addMember(this.state.member);
    // }

    // toggleAdd() {
    //     console.log('add clicked')
    //     this.setState({
    //         isAdding: !this.state.isAdding
    //     })
    // }

    // saveMember(event) {
    //     event.preventDefault();
    //     this.props.updateMember(this.state.member);
    // }

    // componentDidMount() {
    //     this.props.loadMembers() 
    // }
  
    // render () {
    //     if (!this.state.isAdding) {
    //         return (
    //             <div className="content">
    //                 <h1>Our Members</h1>
    //                 <MembersList />
    //                 <Button variant="success" onClick={this.toggleAdd}>Add Member</Button>
    //           </div>
    //         )
    //     } else {
    //         return (
    //             <AddMember onSubmit={this.handleOnSubmit}/>
    //             // test
    //         )
    //     }
    //   }
    render() {
        return (
          <div className="col-md-12">
            <h1>Members</h1>
            <div className="col-md-4">
              <MembersList members={this.props.members} />
            </div>
          </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
      members: state.members
    };
  }
  
export default connect(mapStateToProps, {fetchMembers, addMember})(MembersPage)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MembersList from '../components/MembersList'
import Button from 'react-bootstrap/Button'
import AddMember from '../components/AddMember'
import { Link } from 'react-router-dom'
import {fetchMembers} from '../actions/MemberActions'

class MembersPage extends Component {
    componentDidMount() {
        // debugger
        
        if (this.props.members.length < 1) {
            console.log("firing")
            this.props.fetchMembers();
        }

    }
  
    render () {
        const members = this.props.members
        return (
            <div className="col-md-12">
              <h1>Members </h1>
              <div className="col-md-4">
                <MembersList members={this.props.members} />
              </div>
              <Link to={'/members/new'} className="btn btn-success">Add Member</Link>
              <div className="col-md-8">
                {this.props.children}
              </div>
            </div>
          );
        }
    }

    function mapStateToProps(state, ownProps) {
        // if (state.members.length > 0) {
            return {
            members: state.members
            };
        // } else {
        //     return {
        //     members: [{id: '', name: '', hometown: '', country: '', email: '', bike: '', bio: '', role: '', hobbies: []}]
        //     }
        // }
    }


  
export default connect(mapStateToProps,{fetchMembers})(MembersPage)
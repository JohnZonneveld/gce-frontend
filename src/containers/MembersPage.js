import React, { Component } from 'react'
import { connect } from 'react-redux'
import MembersList from '../components/MembersList'
import { Link } from 'react-router-dom'

class MembersPage extends Component {
  
    render () {
        const members = this.props.members
        return (
            <div className="col-md-12">
				<br></br>
				<h1>Members </h1>
				<div className="col-md-4">
					<MembersList members={this.props.members} />
				</div>
				<Link to={'/members/new'} className="btn btn-success">Add Member</Link>
				<div className="col-md-8">
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

export default connect(mapStateToProps)(MembersPage)
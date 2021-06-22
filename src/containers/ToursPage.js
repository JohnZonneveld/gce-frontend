import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToursList from '../components/ToursList'
import { Link } from 'react-router-dom'

class ToursPage extends Component {
  
    render () {
        // const tours = this.props.tours
        debugger
        return (
            <div className="col-md-12">
                <br></br>
				<h1>Tours </h1>
				<div className="col-md-4">
					<ToursList tours={this.props.tours} />
				</div>
				<Link to={'/tours/new'} className="btn btn-success">Add Tour</Link>
				<div className="col-md-8">
				</div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger
    return {
        tours: state.tours
    };
}

export default connect(mapStateToProps)(ToursPage)
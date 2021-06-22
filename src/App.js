import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import About from './pages/About'
import MembersPage from './containers/MembersPage'
import MemberPage from './components/MemberPage'
import MemberAdd from './components/MemberAdd'
import ToursPage from './containers/ToursPage'
import TourPage from './components/TourPage'
import TourAdd from './components/TourAdd'
import {fetchMembers} from './actions/MemberActions'
import {fetchTours} from './actions/TourActions'


class App extends Component {

	componentDidMount() {
        if (this.props.members.length < 1) {
            console.log("firing")
            this.props.fetchMembers();
			this.props.fetchTours();
        }


    }

  	render() {
		return (
			<div className="App">
				<Header />
				<NavBar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={About}/>
					<Route exact path='/members' component={MembersPage} />
					<Route exact path='/members/new' component={MemberAdd} />
					<Route exact path='/members/:id' component={MemberPage} />
					<Route exact path='/tours' component={ToursPage} />
					<Route exact path='/tours/new' component={TourAdd} />
					<Route exact path='/tours/:id' component={TourPage} />

				</Switch>
				<Footer />
			</div>
		);
  }
  
}

function mapStateToProps(state, ownProps) {
	return {
		members: state.members,
		tours: state.tours
	};
}

export default connect(mapStateToProps,{fetchMembers, fetchTours})(App);

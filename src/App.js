import './App.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import About from './pages/About'
import MembersContainer from './containers/MembersContainer';
import { fetchMembers } from './actions/MemberActions';
import { connect } from 'react-redux'
import MemberPage from './components/MemberPage'
// import TourForm from './components/TourForm'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      tours: []
    }
  }

  componentDidMount() {
    this.props.fetchMembers() 
  }

  render() {
    return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
      <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/members' component={MembersContainer} />
          {/* <Route exact path='/members/add' component={AddMember} /> */}
          {/* <Route exact path='/members/:id/edit' component={EditMember} /> */}
          <Route exact path='/members/:id' render={(props) => <MemberPage {...props} /> } />
          {/* <Route exact path='/tours' component={TourList} /> */}
      </Switch>
      {/* <MemberForm /> */}
      <Footer />
    </div>
    );
  }
  
}

export default connect(null,{fetchMembers})(App);

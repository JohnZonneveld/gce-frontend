import '../App.css'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import NavBar from './NavBar';
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import MembersPage from '../containers/MembersPage_'
import MemberPage from './members/MemberPage'
import {fetchMembers} from '../actions/memberActions'

class App extends Component {

  // componentDidMount() {
  //   console.log('getting members')
  //   fetchMembers()
  // }

  render() {
    return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
      <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/members' component={MembersPage} />
          {/* <Route exact path='/members/add' component={AddMember} /> */}
          {/* <Route exact path='/members/:id/edit' component={EditMember} /> */}
          {/* <Route exact path='/members/:id' render={(props) => <MemberPage {...props} /> } /> */}
          <Route exact path='/members/:id' component={MemberPage} />


          {/* <Route exact path='/tours' component={TourList} /> */}
      </Switch>
      {/* <MemberForm /> */}
      <Footer />
    </div>
    );
  }
  
}

export default App;

import './App.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import About from './pages/About'


class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
      <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About}/>
          {/* <Route exact path='/members' component={MemberList} />
          <Route exact path='/members/add' component={AddMember} />
          <Route exact path='/members/:id/edit' component={EditMember} />
          <Route exact path='/members/:id' component={MemberPage} />
          <Route exact path='/tours' component={TourList} /> */}
      </Switch>
      <Footer />
    </div>
    );
  }
  
}

export default App;

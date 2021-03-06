import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home'
import Nav from './components/nav/Nav'
import SideNav from './components/nav/SideNav'
import Backdrop from './components/backdrop/Backdrop'
import Footer from './components/nav/Footer'

class App extends Component {
  state = {
    sideNav: false
  }

  sideNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideNav: !prevState.sideNav}
    })
  }

  closeSideNav = () => {
    this.setState({sideNav: false})
  }

  render() {
    let backdrop

    if (this.state.sideNav) {
      backdrop = <Backdrop click={this.closeSideNav}/>
    }
    return(
    <Router>
      <div style={{height: '100%'}}>
        <Nav sideNavClick={this.sideNavToggleClickHandler} />
        <SideNav show={this.state.sideNav} close={this.closeSideNav}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/:id" component={ProjectDetails} />
        </Switch>
        {backdrop}
        <Footer />
      </div>
    </Router>
  )}
}

export default App;

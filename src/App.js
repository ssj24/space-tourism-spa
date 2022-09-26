import React, { Component } from 'react';
import Nav from './Nav.js';
import Home from './Home.js';
import Destination from './Destination.js';
import Crew from './Crew.js';
import Technology from './Technology.js';
import './assets/styles/App.css';
import 'animate.css';

class App extends Component {
  state = {
    selectedNav: 0
  };

  navChange = (idx) => {
    this.setState({selectedNav: idx})
  }
  navClicked = (target) => {
    let navs = target.parentElement.children;
    for (let i=0; i < navs.length; i++) {
      if (navs[i] !== target) {
        navs[i].classList.remove("selected");
      }
      else navs[i].classList.add("selected");
    }
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav navChange = {this.navChange} navClicked={this.navClicked} />
        </header>
        <div className="App-main">
          {this.state.selectedNav === 0 ? <Home navChange = {this.navChange} navClicked = {this.navClicked} /> : 
           this.state.selectedNav === 1 ? <Destination navClicked={this.navClicked} /> :
           this.state.selectedNav === 2 ? <Crew navClicked={this.navClicked} /> : <Technology navClicked={this.navClicked} />}
        </div>
      </div>
    );
  }
}

export default App;

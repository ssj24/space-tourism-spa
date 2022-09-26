import React, { Component } from 'react';
import './assets/styles/Nav.css';

class Nav extends Component {
  lists = ["Home", "Destination", "Crew", "Technology"];
  list = this.lists.map((name, index) =>
    {if (index === 0) {
      return <li onClick={(e) => {
        this.props.navChange(index);
        this.props.navClicked(e.target);
      }} className="selected" key={index}><span>{'0'.concat(index)}</span>{name}</li>
    } else {
      return <li onClick={(e) => {
        this.props.navChange(index);
        this.props.navClicked(e.target);
      }} key={index}><span>{'0'.concat(index)}</span>{name}</li>
    }}
    );
  render() {
    return (
      <div className="navWrapper">
        <div className="logo"></div>
        <ul className="mainNav">
          {this.list}
        </ul>
      </div>
    );
  }
}

export default Nav;
import React, { Component } from 'react';
import './assets/styles/NavDetail.css';

class NavDetail extends Component {
  state = {

  }
  list = this.props.list.map((name, index) =>
    {if (index === 0) {
      return <li onClick={(e) => {
        this.props.handleData(this.props.type, index);
        this.props.navClicked(e.target);
      }} className="selected" key={index}>{name}</li>
    } else {
      return <li onClick={(e) => {
        this.props.handleData(this.props.type, index);
        this.props.navClicked(e.target);
      }}  key={index}>{name}</li>
    }}
    );
  render() {
    return (
      <ul className={
        this.props.type === "destinations" ? "navDetail" :
        this.props.type === "crew" ? "navDetail navCrew" : "navDetail navTech"
      }>
        {this.list}
      </ul>
    );
  }
}

export default NavDetail;
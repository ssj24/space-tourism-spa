import React, { Component } from 'react';
import Nav from './NavDetail.js';
import './assets/styles/Dest.css';
import data from './assets/data.json';

class Destination extends Component {
  state = {
    type: "destinations",
    category: "",
    pic: "",
    descripation: "",
    title: "",
    distance: "",
    time: "",
    dests: ["Moon", "Mars", "Europa", "Titan"]
  };
  handleData = (type, idx) => {
    this.setState({category: data[type][idx]}, () => {
      this.setState({
        pic: this.state.category.images.png,
        description: this.state.category.description,
        title: this.state.category.name,
        distance: this.state.category.distance,
        time: this.state.category.travel
      })
    })
  }

  componentDidMount() {
    this.handleData(this.state.type, 0);
  }

  render() {
    let { pic, title, description, distance, time } = this.state;
    return (
      <div className="wrapper destWrapper">
        <h2>01 Pick your destination</h2>
        <section className="mainWrapper">
          <section className="left">
            <img className="animate__animated animate__bounceInLeft" src={process.env.PUBLIC_URL + pic} alt={title} />
          </section>
          <section className="right">
            <Nav
              type={this.state.type}
              list={this.state.dests}
              handleData={this.handleData}
              navClicked={this.props.navClicked} />
            <h1>{title}</h1>
            <p>
              {description}
            </p>
            <span className="subCategory">
              <p>Avg. distance</p>
              <p>{distance}</p>
            </span>
            <span className="subCategory">
              <p>Est. travel time</p>
              <p>{time}</p>
            </span>

          </section>
        </section>

      </div>
    );
  }
}

export default Destination;
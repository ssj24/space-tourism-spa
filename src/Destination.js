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
  changeImage = (newData) => {
    let imgSection = document.querySelector(".left");
    imgSection.innerHTML = "";
    let image = document.createElement("img");
    image.src = process.env.PUBLIC_URL + newData.images.png;
    image.alt = newData.name;
    image.classList = "animate__animated animate__zoomInDown";
    imgSection.appendChild(image);
  }
  handleData = (type, idx) => {
    let newData = data[type][idx];
    this.setState({category: newData}, () => {
      this.setState({
        pic: this.state.category.images.png,
        description: this.state.category.description,
        title: this.state.category.name,
        distance: this.state.category.distance,
        time: this.state.category.travel
      });
      this.changeImage(newData);
    })
  }

  componentDidMount() {
    this.handleData(this.state.type, 0);
  }

  render() {
    let { title, description, distance, time } = this.state;
    return (
      <div className="wrapper destWrapper">
        <h2>01 Pick your destination</h2>
        <section className="mainWrapper">
          <section className="left">
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
import React, { Component } from 'react';
import Nav from './NavDetail.js';
import './assets/styles/Crew.css';
import data from './assets/data.json'

class Crew extends Component {
  state = {
    type: "crew",
    category: "",
    pic: "",
    descripation: "",
    position: "",
    name: "",
    crewList: [0, 1, 2, 3]
  };
  changeImage = (newData) => {
    let imgSection = document.querySelector(".right");
    imgSection.innerHTML = "";
    let image = document.createElement("img");
    image.src = process.env.PUBLIC_URL + newData.images.png;
    image.alt = newData.name;
    image.style.setProperty('--animate-duration', '0.7s');
    image.classList = "animate__animated animate__backInUp";
    imgSection.appendChild(image);
  }
  handleData = (type, idx) => {
    let newData = data[type][idx];
    this.setState({category: newData}, () => {
      this.setState({
        pic: this.state.category.images.png,
        description: this.state.category.bio,
        position: this.state.category.role,
        name: this.state.category.name
      });
      this.changeImage(newData);
    })
  }
  componentDidMount() {
    this.handleData(this.state.type, 0);
  }

  render() {
    let { position, name, description } = this.state;
    return (
      <div className="wrapper crewWrapper">
        <h2>02 Meet your crew</h2>
        <section className="left">
          <h3>{position}</h3>
          <h1>{name}</h1>
          <p>{description}</p>
          <Nav
              type={this.state.type}
              list={this.state.crewList}
              handleData={this.handleData}
              navClicked={this.props.navClicked} />
        </section>
        <section className="right">
        </section>
      </div>
    );
  }
}

export default Crew;
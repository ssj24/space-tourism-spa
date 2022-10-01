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
    crewList: ["", "", "", ""]
  };
  changeImage = (newData) => {
    let imgSection = document.querySelector(".imageContainer");
    imgSection.innerHTML = "";
    let image = document.createElement("img");
    image.src = process.env.PUBLIC_URL + newData.images.png;
    image.alt = newData.name;
    image.style.setProperty('--animate-duration', '0.7s');
    image.classList = "animate__animated animate__fadeInUp";
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
        <section className="mainWrapper">
          <h2><span>02 </span>Meet your crew</h2>
          <div className="sectionWrapper">
            <section className="descriptionContainer">
              <h3 className="subTitle">{position}</h3>
              <h1 className="title">{name}</h1>
              <p className="desc">{description}</p>
              <Nav
                  type={this.state.type}
                  list={this.state.crewList}
                  handleData={this.handleData}
                  navClicked={this.props.navClicked} />
            </section>
            <section className="imageContainer">
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default Crew;
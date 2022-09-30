import React, { Component } from 'react';
import Nav from './NavDetail.js';
import './assets/styles/Tech.css';
import data from './assets/data.json'

class Technology extends Component {
  state = {
    type: "technology",
    category: "",
    pic: "",
    descripation: "",
    title: "",
    techList: [0, 1, 2]
  };

  changeImage = (newData) => {
    let imgSection = document.querySelector(".right");
    imgSection.innerHTML = "";
    let image = document.createElement("img");
    image.src = process.env.PUBLIC_URL + newData.images.portrait;
    image.alt = newData.name;
    image.classList = "animate__animated animate__fadeInRight";
    imgSection.appendChild(image);
  }

  handleData = (type, idx) => {
    let newData = data[type][idx];
    this.setState({category: newData}, () => {
      this.setState({
        pic: this.state.category.images.portrait,
        description: this.state.category.description,
        title: this.state.category.name
      });
      this.changeImage(newData);

    })
  }
  componentDidMount() {
    this.handleData(this.state.type, 0);
  }
  render() {
    let { title, description } = this.state;
    return (
      <div className="wrapper techWrapper">
        <h2>03 Space launch 101</h2>
        <section className="left">
          <Nav
            type={this.state.type}
            list={this.state.techList}
            handleData={this.handleData}
            navClicked={this.props.navClicked} />

          <h3>The terminology...</h3>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        <section className="right">
        </section>
      </div>
    );
  }
}

export default Technology;
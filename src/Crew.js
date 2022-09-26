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
  handleData = (type, idx) => {
    this.setState({category: data[type][idx]}, () => {
      this.setState({
        pic: this.state.category.images.png,
        description: this.state.category.bio,
        position: this.state.category.role,
        name: this.state.category.name
      })
    })
  }
  componentDidMount() {
    this.handleData(this.state.type, 0);
  }

  render() {
    let { position, name, description, pic } = this.state;
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
          <img data-aos="fade-up" src={process.env.PUBLIC_URL + pic} alt={position} />
        </section>
      </div>
    );
  }
}

export default Crew;
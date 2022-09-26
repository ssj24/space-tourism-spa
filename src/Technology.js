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
  handleData = (type, idx) => {
    this.setState({category: data[type][idx]}, () => {
      this.setState({
        pic: this.state.category.images.portrait,
        description: this.state.category.description,
        title: this.state.category.name
      })
    })
  }
  componentDidMount() {
    this.handleData(this.state.type, 0);
  }
  render() {
    let { title, description, pic } = this.state;
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
          <img data-aos="slide-left" src={process.env.PUBLIC_URL + pic} alt={title}/>
        </section>
      </div>
    );
  }
}

export default Technology;
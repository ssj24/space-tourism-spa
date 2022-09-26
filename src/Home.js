import React, { Component } from 'react';
import './assets/styles/Home.css';

class Home extends Component {
  handleNav = () => {
    let navs = document.querySelector(".mainNav").children;
    navs[1].classList.add("selected");
    navs[0].classList.remove("selected");
  }
  render() {
    return (
      <div className="wrapper homeWrapper">
        <section className="mainWrapper">
          <section className="left">
            <h2 className="subTitle">
              So, you want to travel to
            </h2>
            <h1 className="title">Space</h1>
            <p className="desc">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </section>
          <section className="right">
              <div onClick={(e) => {
                this.props.navChange(1)
                this.handleNav()
              }}>Explore</div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
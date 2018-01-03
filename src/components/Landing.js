import React, { Component } from 'react';
import './styles.css';
import CircleImage from "./CircleImage";
import BottomIconNav from "./BottomIconNav";
import SocialMediaBar from "./SocialMediaBar";
import Counter from "./Counter";


class Landing extends Component {
  render() {
    return (
        <div className="container">
          <Counter/>
          <CircleImage id="profile"/>
          <h1>Kevin Nam</h1>
          <h3>Full-Stack Web Developer</h3>
          <h3>Montreal, QC, Canada</h3>
          <SocialMediaBar/>
          <BottomIconNav/>
        </div>
    );
  }
}

export default Landing;

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
          <h1>Enter your name:</h1>
          <input id="name" type="text" value={this.props.nameValue} onChange={this.props.onChange}/>
          <input onClick={this.props.onClick} id="submit" type="submit" value="Join" />
        </div>
    );
  }
}

export default Landing;

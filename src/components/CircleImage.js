import React, { Component } from 'react';
import './styles.css';

class CircleImage extends Component {
  render() {

    if (this.props.size) {
      const size = this.props.size;
      const borderRadius = this.props.size / 2;
      const text = this.props.text;
      const link = this.props.link;

      return (
          <a href={link} style={{
            height: size,
            width: size,
            borderRadius: borderRadius
          }} id={this.props.id} className="highlight circleImage">

            <div style={{
              height: size,
              width: size,
              borderRadius: borderRadius}} className="overlay"/>
            <div className="title"><h3>{text}</h3></div>
          </a>
      );
    } else {
      return (
          <div id={this.props.id} className="circleImage"/>
      );
    }
  }
}

export default CircleImage;

import React, { Component } from 'react';
import './styles.css';
import CircleImage from "./CircleImage";
var FontAwesome = require('react-fontawesome');


class Projects extends Component {
  render() {
    return (
        <div className="project-container">
          <h1 className="projects-title">Work/Projects <FontAwesome className="icon" name='briefcase'/></h1>
          <div className="projects">
            <CircleImage size={200} link={"https://www.east2westofficial.com/"} text={"East2West Official Store"} id="e2w"/>
            <CircleImage size={200} link={"http://thenutjoblive.com/"} text={"The Nut Job Live & Friends"} id="tnjl"/>
            <CircleImage size={200} link={"http://zachphan.com"} text={"Zach Phan Photography"} id="zachphan"/>
            <CircleImage size={200} link={"http://flights.kevinnam.me"} text={"Nam's Flight Price Tracker"} id="flight"/>
            <CircleImage size={200} link={"http://travel.kevinnam.me"} text={"Spontaneous Travel"} id="travel"/>
          </div>
        </div>
    );
  }
}

export default Projects;

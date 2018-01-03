import React, { Component } from 'react';
import './styles.css';
var FontAwesome = require('react-fontawesome');

class SocialMediaBar extends Component {
  render() {
    return (
        <div className="socialMediaBar">
          <a target="_blank" href="https://www.instagram.com/thekevinnam/"><FontAwesome className="icon" name='instagram'/></a>
          <a target="_blank" href="https://www.linkedin.com/in/thekevinnam/"><FontAwesome className="icon" name='linkedin-square'/></a>
          <a href="mailto:kevin.nam@mail.mcgill.ca"><FontAwesome className="icon" name='envelope-o'/></a>
        </div>
    );
  }
}

export default SocialMediaBar;

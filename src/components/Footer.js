import React, { Component } from 'react';
import './styles.css';
var FontAwesome = require('react-fontawesome');

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="content">
            <p>Made by Kevin Nam using ReactJS <FontAwesome className="icon" name='heart-o'/></p>

            <p>(Jan. 2018)</p>
          </div>
        </div>
    );
  }
}

export default Footer;

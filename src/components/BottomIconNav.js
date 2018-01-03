import React, { Component } from 'react';
import './styles.css';
var FontAwesome = require('react-fontawesome');

class BottomIconNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity: 0.7,
    }
  }

  handleScroll = () => {
    if (window.scrollY >= 150 && window.scrollY <= 350) {
      const opacity = 0.7 - 0.6 * (window.scrollY / 350);
      this.setState({opacity: opacity});
      console.log(this.state.opacity);
    } else if (window.scrollY > 200) {
      this.setState({opacity: 0});
    } else {
      this.setState({opacity: 0.7});
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () =>  {
    window.removeEventListener('scroll', this.handleScroll);
  };

  onClickHandler = function() {
    console.log('clicked');
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  render() {
    return (
        <div style={{opacity: this.state.opacity}} onClick={this.onClickHandler} className="bottomIconNav">
          <p>Projects</p>
          <FontAwesome className="icon" size='2x' name='chevron-down' />
        </div>
    );
  }
}

export default BottomIconNav;

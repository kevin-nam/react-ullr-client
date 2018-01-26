import React, { Component } from 'react';
import './styles.css';

class AnswerButton extends Component {
  render() {
      return (
          <div className="answerBtn" onClick={this.props.onClick}>
            <h4>{this.props.text}</h4>
          </div>
      );
    }
}

export default AnswerButton;

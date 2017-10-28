import React, { Component } from 'react';
import '../css/SocialContainer.css';

class SocialContainer extends Component {
  render () {
    return (
      <div className="social-container">
        <div className="social-separator"></div>
        <div className="social">
          <span className="social-icon"></span>
          <span className="social-icon"></span>
          <span className="social-icon"></span>
          <span className="social-icon"></span>
          <span className="social-icon"></span>
        </div>
      </div>
    )
  }
}

export default SocialContainer;
import React, { Component } from 'react'
import '../css/ImageContainer.css'

class ImageContainer extends Component {
  render () {
    return (
      <div className="image-container">
        <canvas className="canvas"/>
        <div className="logo">
          logo
        </div>
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
      </div>
    )
  }
}

export default ImageContainer;
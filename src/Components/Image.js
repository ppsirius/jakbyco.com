import React, { Component } from 'react';
import '../css/Image.css';

class Image extends Component {
  imageLoaded = () => {
    window.dispatchEvent(new Event('animationImageComplete'));
  }

  render () {
    return (
      <div className="image">
        <img
          src="/images/canvas-image.jpg"
          alt="backgraund image"
          onLoad={this.imageLoaded}
        />
        <div className="image-overlay image-line"></div>
        <div className="image-overlay image-rect"></div>
      </div>
    )
  }
}

export default Image;
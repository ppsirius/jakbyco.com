import React, { Component } from 'react'
import Canvas from './Canvas';

import SocialContainer from './SocialContainer';
import '../css/ImageContainer.css'

class ImageContainer extends Component {
  render () {
    return (
      <div className="image-container">
        <Canvas />
        <div className="logo">
          logo
        </div>
        <SocialContainer />
      </div>
    )
  }
}

export default ImageContainer;
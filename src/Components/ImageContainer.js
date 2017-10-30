import React, { Component } from 'react'
import Canvas from './Canvas';
import Logo from './Logo';
import SocialContainer from './SocialContainer';
import '../css/ImageContainer.css'

class ImageContainer extends Component {
  render () {
    return (
      <div className="image-container">
        <Canvas />
        <Logo />
        <SocialContainer />
      </div>
    )
  }
}

export default ImageContainer;
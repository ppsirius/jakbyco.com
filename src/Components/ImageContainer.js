import React, { Component } from 'react'
import Logo from './Logo';
import Image from './Image';
import SocialContainer from './SocialContainer';
import '../css/ImageContainer.css'

class ImageContainer extends Component {
  render () {
    return (
      <div className="image-container">
        <Image />
        <Logo />
        <SocialContainer />
      </div>
    )
  }
}

export default ImageContainer;
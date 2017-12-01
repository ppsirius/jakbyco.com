import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import { animation } from '../Helpers/AnimationVariable';
import '../css/Image.css';

class Image extends Component {
  imageLoaded = () => {
    this.animateOverlay();
  }

  animateOverlay = () => {
    TweenMax.to(this.refs.imageLine, 1, {y: '100%', delay: .3, ease: animation.ease,
      onComplete: () => TweenMax.to(this.refs.imageRect, 1.5, {x: '-100%', ease: animation.ease,
        onComplete: () => window.dispatchEvent(new Event('animationImageComplete'))
      })
    })
  }

  render () {
    return (
      <div className="image">
        <img
          src="/images/image-small.jpg"
          srcSet="/images/image-large.jpg 1920w, /images/image-medium.jpg 960w, /images/image-small.jpg 400w"
          sizes="(min-width: 1025px) 50vw, 100vw"
          alt="Waterfall in Norway"
          onLoad={this.imageLoaded}
        />
        <div className="image-overlay image-line" ref="imageLine"></div>
        <div className="image-overlay image-rect" ref="imageRect"></div>
      </div>
    )
  }
}

export default Image;
import React, { Component } from 'react';
import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap';
import MediaQuery from '../Helpers/MediaQuery';
import '../css/Canvas.css';

const canvasImage = '/images/canvas-image.jpg';
const imageWidth = 2448;
const imageHeight = 3264;

export default class Canvas extends Component {

  componentDidMount() {
    this.pixiSetup();
    this.pixiAnimate();

    this.canvasOverlayAnimation();
  }

  pixiSetup = () => {
    PIXI.utils.skipHello();
    this.canvasHeight = window.innerHeight;
    this.canvasWidth = MediaQuery.isMobile() ? window.innerWidth : window.innerWidth / 2;

    this.renderer = PIXI.autoDetectRenderer(this.canvasWidth, this.canvasHeight);
    this.renderer.backgroundColor = 0xFFFFFF;
    this.refs.canvasContainer.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.stage.width = this.canvasWidth;
    this.stage.height = this.canvasHeight;

    PIXI.loader.add(canvasImage).load(this.pixiImageSetup);
  }

  pixiAnimate = () => {
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.pixiAnimate);

  }

  pixiRectOverlay = () => {
    this.rect = new PIXI.Graphics();
    this.rect.beginFill(0x334455, 0.5);
    this.rect.drawRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.stage.addChild(this.rect);
  }

  pixiImageSetup = () => {
    this.image = new PIXI.Sprite(PIXI.loader.resources[canvasImage].texture);
    this.stage.addChild(this.image);

    // Rect overlay
    this.pixiRectOverlay();

    this.image.position.x = 0;
    this.image.position.y = 0;

    this.imageRatio = imageWidth / imageHeight;
    this.stageRatio = this.canvasWidth / this.canvasHeight;

    if (this.stageRatio > this.imageRatio) {
      this.image.height = imageHeight / (imageWidth / this.canvasWidth);
      this.image.width = this.canvasWidth;
    } else {
      this.image.width = imageWidth / (imageHeight / this.canvasHeight);
      this.image.height = this.canvasHeight;
    }
  }

  canvasOverlayAnimation = () => {
    // @TODO chenge this timeout to pixi finish render

    setTimeout(() => {
      TweenMax.to(this.refs.canvasOverlay, 1.5, {
        x: '100%',
        onComplete: () => {
          window.dispatchEvent(new Event('animationCanvasComplete'));
        }
      })
    }, 1000 )

  }

  render() {
    return (
      <div className="canvas-container" ref="canvasContainer">
        <div className="canvas-overlay" ref="canvasOverlay"></div>
      </div>
    );
  }

}

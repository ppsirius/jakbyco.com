import React, { Component } from 'react';
import * as PIXI from "pixi.js"
import '../css/Canvas.css';

const canvasImage = '/images/canvas-image.jpg';
const imageWidth = 2448;
const imageHeight = 3264;

export default class Canvas extends Component {

  componentDidMount() {
    this.canvasHeight = window.innerHeight;
    this.canvasWidth = window.innerWidth;

    // Setup Canvas
    this.renderer = PIXI.autoDetectRenderer(this.canvasWidth, this.canvasHeight);
    this.renderer.backgroundColor = 0xFFFFFF;
    this.refs.canvasContainer.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.stage.width = this.canvasWidth;
    this.stage.height = this.canvasHeight;

    PIXI.loader.add(canvasImage).load(this.imageSetup);

    this.animate();
  }

  animate = () => {
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.animate);
  }

  imageSetup = () => {
    this.image = new PIXI.Sprite(PIXI.loader.resources[canvasImage].texture);
    this.stage.addChild(this.image);

    this.image.position.x = 0;
    this.image.position.y = 0;

    this.imageRatio = imageWidth / imageHeight;
    this.stageRatio = this.canvasWidth / this.canvasHeight;

    console.log(this.imageRatio + ' image ratio')
    console.log(this.stageRatio + ' stage ratio')

    if (this.stageRatio > this.imageRatio) {
      this.image.height = imageHeight / (imageWidth / this.canvasWidth);
      this.image.width = this.canvasWidth;
    } else {
      this.image.width = imageWidth / (imageHeight / this.canvasHeight);
      this.image.height = this.canvasHeight;
    }
  }

  render() {
    return (
      <div className="canvas-container" ref="canvasContainer"></div>
    );
  }

}

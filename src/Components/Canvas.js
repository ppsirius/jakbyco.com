import React, { Component } from 'react';
import * as PIXI from "pixi.js"

export default class Canvas extends Component {

  constructor( props ) {
    super(props);

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.renderer = PIXI.autoDetectRenderer(1366, 768);
    this.refs.canvasContainer.appendChild(this.renderer.view);

    this.stage = new PIXI.Container();
    this.stage.width = 1366;
    this.stage.height = 768;

    this.animate();
  }

  animate() {
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.animate);
  }

  render() {
      return (
          <div className="canvas-container" ref="canvasContainer"></div>
      );
  }

}

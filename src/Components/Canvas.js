import React, { Component } from 'react';
import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap';
import MediaQuery from '../Helpers/MediaQuery';
import { randomNumber } from '../Helpers/RandomNumber';
import { animation } from '../Helpers/AnimationVariable';
import '../css/Canvas.css';

const canvasImage = '/images/canvas-image.jpg';
const filterTexture = '/images/clouds.jpg';
const imageWidth = 2448;
const imageHeight = 3264;
const marginMove = 40;

const displacementSprite  = new PIXI.Sprite.fromImage( filterTexture );
const displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );

export default class Canvas extends Component {
  constructor(props) {
    super(props)

    this.isFilterAnimating = false;
    window.addEventListener('scroll', () => this.filterAnimate());
  }

  componentDidMount() {
    this.pixiSetup();
    this.displacementFilter();
    this.pixiAnimate();

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

    this.loader = PIXI.loader;
    this.loader.add(canvasImage);
    // Run animation after image loaded
    this.loader.once('complete', () => {
      this.canvasOverlayAnimation();
    })
    this.loader.load(this.pixiImageSetup);
  }

  pixiAnimate = () => {
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = true;
    this.ticker.add( (delta) => {
      displacementSprite.x += 10 * delta;
      displacementSprite.y += 3;

      console.log(this.stage)
      this.renderer.render(this.stage);
    });
  }

  pixiRectOverlay = () => {
    this.rect = new PIXI.Graphics();
    this.rect.beginFill(0x334455, 0.5);
    this.rect.drawRect(- marginMove, - marginMove, this.canvasWidth + (2 * marginMove), this.canvasHeight + (2 * marginMove));
    this.stage.addChild(this.rect);
  }

  pixiImageSetup = () => {
    this.image = new PIXI.Sprite(PIXI.loader.resources[canvasImage].texture);
    this.stage.addChild(this.image);

    // Calculate ratio - image cover
    this.greaterRatio = Math.max(this.canvasWidth / imageWidth, this.canvasHeight / imageHeight);
    this.greaterRatioIncrease = this.greaterRatio * 1.1;
    this.image.scale.set(this.greaterRatioIncrease, this.greaterRatioIncrease)

    // Image position
    this.image.position.x = - this.greaterRatioIncrease * 100;
    this.image.position.y = - this.greaterRatioIncrease * 100;

    // Rect overlay
    if(MediaQuery.isMobile()) {
      this.pixiRectOverlay();
    }
  }

  displacementFilter = () => {
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.scale.x = 2;
    displacementSprite.scale.y = 2;
    displacementFilter.autoFit = true;

    this.stage.filters = [displacementFilter];
    this.stage.addChild( displacementSprite );

    this.initFilterValues = {
      x: displacementFilter.scale.x,
      y: displacementFilter.scale.y
    }
  }

  filterAnimate = () => {
    if(!this.isFilterAnimating) {
      this.isFilterAnimating = true;
      TweenMax
        .to(displacementFilter.scale, 2, {
          x: randomNumber(150, 200),
          y: randomNumber(60, 90),
            onComplete: () => {
              TweenMax.to(displacementFilter.scale, 1, {
                x: this.initFilterValues.x,
                y: this.initFilterValues.y,
                  ease: animation.ease,
                  onComplete: () => {
                    setTimeout( () => {
                      this.isFilterAnimating = false;
                    }, 2000)
                  }
                }
              )
            }
          }
      )
    }
  }

  canvasOverlayAnimation = () => {
    setTimeout(() => {
      TweenMax.to(this.refs.canvasOverlay, 1.5, {
        x: '100%',
        onComplete: () => {

        }
      })
    }, 100 )
  }

  render() {
    return (
      <div className="canvas-container" ref="canvasContainer">
        <div className="canvas-overlay" ref="canvasOverlay"></div>
      </div>
    );
  }

}

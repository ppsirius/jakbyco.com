import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './css/App.css';

import ImageContainer from './Components/ImageContainer';
import About from './Components/About';
import LastProjects from './Components/LastProjects';

class App extends Component {

  // static childContextTypes = {
  //   screenSize: PropTypes.object
  // }

  // // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize)
  // }

  // handleResize() {
  //   MediaQuery.isMobile();
  // }

  // getDocumentSize(value) {
  //   const w = window;
  //   if (value === 'height') {
  //     return Math.max(
  //       w.innerHeight
  //     )
  //   } else if (value === 'width') {
  //     return (
  //       w.innerWidth
  //     )
  //   }
  // }

  // getChildContext() {
  //   return {
  //     screenSize: {
  //       width: this.getDocumentSize('width'),
  //       height: this.getDocumentSize('height')
  //     }
  //   }
  // }

  render() {
    return (
      <div className="app">
        <ImageContainer />
        <About />
        <LastProjects />
      </div>
    );
  }
}

export default App;

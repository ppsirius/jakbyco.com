import React, { Component } from 'react';

import ImageContainer from './Components/ImageContainer';
import About from './Components/About';
import LastProjects from './Components/LastProjects';

class App extends Component {
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

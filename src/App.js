import React, { Component } from 'react';
import MediaQuery from './Helpers/MediaQuery';
import 'normalize.css/normalize.css';
import './css/App.css';

import ImageContainer from './Components/ImageContainer';
import About from './Components/About';
import LastProjects from './Components/LastProjects';

class App extends Component {

  render() {
    return (
      <div className="app">
        <ImageContainer />
        <About />
        {MediaQuery.isDesktop() &&
          <LastProjects />
        }
      </div>
    );
  }
}

export default App;

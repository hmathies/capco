import React, { Component } from 'react';
import Gallery from "../components/Gallery";

class App extends Component {
  render() {
    return (
      <div className="App page-header container-fluid">
        <h1>CAPCO</h1>
        <p><strong>THE FUTURE.NOW</strong></p>
        <Gallery/>
      </div>
  
    );
  }
}

export default App;

import React, { Component } from 'react';
import ImageList from "../components/ImageList";

class App extends Component {
  render() {
    return (
      <div className="App page-header container-fluid">
        <h1>CAPCO</h1>
        <p><strong>THE FUTURE.NOW</strong></p>
        <ImageList/>
      </div>
  
    );
  }
}

export default App;

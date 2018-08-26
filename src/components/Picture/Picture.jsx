import React, { Component } from "react";

import "./Picture.css";

class Picture extends Component {


  render() {
    const { image } = this.props;
   
    return (
       
          <img alt={"puppy"} className="grid picture responsive" src={image.url} />

        
      
    );
  }
}

export default Picture;

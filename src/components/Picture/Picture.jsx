import React, { Component } from "react";

import "./Picture.css";

class Picture extends Component {


  render() {
    const { image } = this.props;

  
    return (
      
      <img alt={"puppy"} className="picture responsive" src={image.url} id={this.props.id}/>    
      
    );
  }
}

export default Picture;



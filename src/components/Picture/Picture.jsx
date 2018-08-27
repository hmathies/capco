import React, { Component } from "react";
import "./Picture.css";
import className from "classnames";

class Picture extends Component {
  

  render() {
    const { image } = this.props;

  
    return (
      
      <img alt={"puppy"} className={(this.props.id === 1 || this.props.id === 12 ? 'span2 picture' : 'span1 picture')}  src={image.url} id={this.props.id}/>    
      
    );
  }
}

export default Picture;



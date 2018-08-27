import React, { Component } from "react";
import "./Picture.css";
import className from "classnames";

class Picture extends Component {
  
  handleClick = () =>{
   function resizePic(){

     var element = document.getElementById("pic0");
     if (element.classList.contains("span1")) {
      element.classList.remove("span1");
      element.classList.add("span2")
     }

    else{
      element.classList.add("span1");
      element.classList.remove("span2")
    }

  }
    
   resizePic();
  }
  render() {
    const { image } = this.props;
    const picId = ("pic" + this.props.id);
    const initialPicLoad =  this.props.id === 1 || this.props.id === 12 ? 'span2 picture picId' : 'span1 picture '  
    
  
    return (

      
      <img alt={"puppy"} 
        className={initialPicLoad} 
        src={image.url} 
        id={picId} 
        onClick={this.handleClick}
      />  


    );
  }

  newMethod() {
    return ("pic" + this.props.id);
  }
}

export default Picture;



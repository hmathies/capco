import axios from "axios";
import React, { Component } from "react";
import Picture from "../Picture/Picture";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }
  componentWillMount() {
    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=18`
      )
      .then(res => {
        const images = res.data;
        this.setState({ images });
      });
      
    }



  render() {
    return (
      <div className="container">
        <div className="grid">
            {this.state.images.map((image, loadedImageId) => (
              <Picture 
                key={image.id} 
                id={loadedImageId} 
                image={image} />
            ))}
        </div>
      </div>);
  }
}

export default Gallery;
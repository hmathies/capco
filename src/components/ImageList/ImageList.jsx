import React, { Component }  from "react";
import axios from 'axios';
import {} from 'react-bootstrap';


class ImageList extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=18`)
      .then(res => {
        console.log(res);
        const images = res.data;
        console.log(images)
        this.setState({images});
      })
  }
  render(){
    return (
      <ul>
        {this.state.images.map(image => <li key={image.id}>{image.url}</li>)}
        
      </ul>
    )
  }
}

  
export default ImageList;




//code below works if using hard coded-- refer back to Clicky app
// const ImageList = props => (
//   <div className="card img-container hover">
//     <img src="https://images.dog.ceo/breeds/whippet/n02091134_19308.jpg" class="img-responsive" alt="cute puppy"></img>
//   </div>
// );

// export default ImageList;
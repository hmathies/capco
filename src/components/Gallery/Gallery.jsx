
import axios from 'axios';
import {Grid} from 'react-bootstrap';
import React, { Component } from 'react';


class Gallery extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    
    this.state = {
        images: []
      }
    }
    componentWillMount() {
    axios.get(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=18`)
        .then(res => {
        const images = res.data;
        this.setState({images});
        })
    }
    render(){
    return (
        <Grid>
            {this.state.images.map((image, i) => 
                <img alt={"puppy"} className="grid" key={image.id} src={image.url}/>)}
        </Grid>  
        )
    }
}


export default Gallery;
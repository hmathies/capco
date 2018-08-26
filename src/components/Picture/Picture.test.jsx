import React from 'react';
import "./Picture.css";
import className from 'classnames';

it('renders without crashing', () => {
    class Picture extends Component {
  

        render() {
          const { image } = this.props;
      
        
          return (
            
            <img alt={"puppy"} className={(this.props.id ===0 || this.props.id ===17? 'largePic' : 'picture')}  src={image.url} />    
            
          );
        }
      }
 
});
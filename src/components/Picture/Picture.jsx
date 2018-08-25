import React, { Component }  from "react";
import {Row, Col} from 'react-bootstrap';




class Picture extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col lg={2}>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}


export default Picture;

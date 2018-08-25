import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Picture extends Component {
  render() {
    const { image } = this.props;

    return (
      <Row className="show-grid">
        <Col lg={2}>
          <img alt={"puppy"} className="grid" src={image.url} />
        </Col>
      </Row>
    );
  }
}

export default Picture;

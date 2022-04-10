import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ItemDetail = (product) => {
  return (
    <div>
<Container>
  <Row>
    <Col><img src={product.img} alt="" /></Col>
    <Col>{product.description}</Col>
  </Row>
</Container>


    </div>
  );
};

export default ItemDetail;
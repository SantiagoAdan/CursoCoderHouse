import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item'

const ItemDetail = (product) => {
  return (
    <div>
<Container>
  <Row>
    <Col><img src={product.img} alt="" /></Col>
    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quae dolore necessitatibus laborum autem quibusdam laboriosam quisquam sequi illo nihil cum quaerat sunt nostrum eveniet molestiae quod, et, error excepturi pariatur ullam facere quia atque a voluptatibus! Magni, velit, obcaecati unde sint laboriosam impedit sed in magnam consectetur tempore architecto?</Col>
  </Row>
</Container>


    </div>
  );
};

export default ItemDetail;
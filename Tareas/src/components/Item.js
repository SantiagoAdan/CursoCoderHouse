import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";



const Item = ({ id, name, img, price }) => {
  const handleClickImg = (e) => {
    e.stopPropagation();
    console.log("click en imagen");
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => console.log(`click en item ${id}`)}
          >
            <Card.Img variant="top" src={img} onClick={handleClickImg} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{"$" + price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`/detail/${id}`}>Ver Mas</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;

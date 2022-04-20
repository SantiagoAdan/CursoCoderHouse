import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../src/context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "./Notification";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);
  const {setNotification} = useNotification
  const handleOnAdd = (count) => {
    setQuantity(count);
    addItem({ id, name, price }, count);
    setNotification('succes', 'Items agregados al carrito!')
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={img} alt="" />
          </Col>
          <Col>
            <div>{description}</div>{" "}
            {quantity === 0 ? (
              <ItemCount onAdd={handleOnAdd} />
            ) : (
              <Link to="/Cart">
                <Button>Ver Carrito</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;

import {  useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../src/context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "./Notification";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { setNotification } = useNotification();

  const handleOnAdd = (count) => {
    console.log("agregue al carrito");

    addItem({ id, name, price }, count);
    setNotification(
      "success",
      "Se agregaron correctamente los productos al carrito"
    );
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={img} alt={name} />
          </Col>
          <Col>
            <div>CATEGORIA: {category}</div>
            <div>{description}</div> <div>$"{price}"</div>
            {isInCart(id) ? (
              <Link to="./cart"><Button>
                Ver Carrito
              </Button>
              </Link>
            ) : (
              <ItemCount onAdd={handleOnAdd} stock={stock} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;

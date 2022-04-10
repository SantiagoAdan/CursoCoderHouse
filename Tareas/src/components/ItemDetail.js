import {useState, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from "../../src/context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (count) => {
    setQuantity(count);
    addItem({ id, name, price }, count);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={img} alt="" />
          </Col>
          <Col>
            <div>{description}</div>
            <div>
              {" "}
              {quantity === 0 ? (
                <ItemCount onAdd={handleOnAdd} />
              ) : (
                <Link to="/cart" className="Option">
                  Ir al carrito
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;

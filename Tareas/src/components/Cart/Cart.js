import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button, Badge, ListGroup } from "react-bootstrap";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((prod) => (
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={prod.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{prod.name}</div>
              {prod.price}
            </div>
            <Badge bg="primary" pill>
              0
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      ))}
      <Button variant="danger" onClick={clearCart}>
        Vaciar carrito
      </Button>
    </div>
  );
};

export default Cart;

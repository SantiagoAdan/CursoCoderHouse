import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Body className="container-flex">
        <Card.Header>Carrito</Card.Header>
        <div className="border rounded-pill my-2 container-flex d-flex justify-content-around">
          <Button variant="danger" onClick={decrement}>
            -
          </Button>
          <Card.Title>{count}</Card.Title>
          <Button variant="primary" onClick={increment}>
            +
          </Button>
        </div>
        <Button variant="outline-info" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;

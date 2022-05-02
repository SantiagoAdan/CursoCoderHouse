import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0)


  const increment = () => {
      setCount(count + 1)

  }
  const decrement = () => {
      setCount(count - 1)
  }


  return (

    <Card className="text-center">
      <Card.Body>
        <Card.Title>Agregar al Carrito</Card.Title>
        <Card.Text className="d-flex justify-content-evenly border rounded">
          <Button variant="danger" onClick={decrement}>-</Button>
          <p>{count}</p>
          <Button onClick={increment}>+</Button>
        </Card.Text>
        <Button variant="success" onClick={() => onAdd(count)}>
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;

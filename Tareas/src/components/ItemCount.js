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
    // <Card className="text-center " style={{ width: "18rem" }}>
    //   <Card.Body>
    //     <Card.Header>Carrito</Card.Header>
    //     <div className="border rounded-pill my-2">
    //       <Button variant="danger" onClick={decrement}>
    //         -
    //       </Button>
    //       <Card.Title>{count}</Card.Title>
    //       <Button variant="primary" onClick={increment}>
    //         +
    //       </Button>
    //     </div>
    //     <Button variant="outline-info" onClick={() => onAdd(count)}>
    //       Agregar al carrito
    //     </Button>
    //   </Card.Body>
    // </Card>
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

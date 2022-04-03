import ItemCount from "./ItemCount";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{category}</p>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Precio: {price}
          <ItemCount />
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default ItemDetail;

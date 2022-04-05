import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { CardGroup } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "ASUS ROG RTX 3090",
    price: 2500,
    category: "PlacasDeVideo",
    img: "https://m.media-amazon.com/images/I/51qTaaObeGL._AC_.jpg",
    stock: 10,
    description: "Descripcion de rtx3090",
  },
  {
    id: 2,
    name: "AMD RYZEN 3950X",
    price: 500,
    category: "Procesador",
    img: "https://m.media-amazon.com/images/I/7122uH4-hfL._AC_SX466_.jpg",
    stock: 16,
    description: "Descripcion de ryzen",
  },
  {
    id: 3,
    name: "Gskill TridentZ 32gb DDR4 KIT",
    price: 250,
    category: "RAM",
    img: "https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SX450_.jpg",
    stock: 10,
    description: "Descripcion de gskill",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(id)));
    }, 2000);
  });
};

const Item = ({ product }) => {
  return (
    <CardGroup className="container-fluid">
    <Card className="container">
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{'$'+product.price}        </Card.Text>
      </Card.Body>
      <Card.Footer><Link to={`/item/${product.id}`}>Ver Mas</Link></Card.Footer>
    </Card>
  </CardGroup>
  );
};

export default Item;

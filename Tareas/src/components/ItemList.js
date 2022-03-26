import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getProducts } from "./Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Imagen</th>
          <th>Stock</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
          {products.map(product =>
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.img}</td>
          <td>{product.stock}</td>
          <td>{product.description}</td>
        </tr>)}
      </tbody>
    </Table>
  );
};

export default ItemList;

import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "ASUS ROG RTX 3090",
    price: 2500,
    category: "Placas De Video",
    img: "https://m.media-amazon.co/",
    stock: 10,
    description: "Descripcion de rtx3090",
  },
  {
    id: 2,
    name: "AMD RYZEN 3950X",
    price: 500,
    category: "Procesador",
    img: "https://encrypted-tbn0.gstatic.com/",
    stock: 16,
    description: "Descripcion de ryzen",
  },
  {
    id: 3,
    name: "Gskill TridentZ 32gb DDR4 KIT",
    price: 250,
    category: "RAM",
    img: "https://m.media-amazon.com/images/",
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
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{product.name}</h2>
      </header>
      <picture>
        <img src={product.img} alt={product.name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${product.price}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${product.id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;

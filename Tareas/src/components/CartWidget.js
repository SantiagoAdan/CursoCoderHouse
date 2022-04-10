import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import  CartContext  from "../context/CartContext";

const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <Link to={'/'}>
    <Button variant="light rounded-pill">
      <FaShoppingCart fontSize="25px" /> {getQuantity()}
    </Button>
    </Link>
  );
};

export default CartWidget;

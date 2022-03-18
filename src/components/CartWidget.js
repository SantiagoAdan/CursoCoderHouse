import { Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <Button variant="light rounded-pill">
      <FaShoppingCart fontSize="25px" /> 0
    </Button>
  );
};

export default CartWidget;

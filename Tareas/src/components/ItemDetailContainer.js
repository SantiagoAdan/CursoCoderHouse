import { useState, useEffect } from "react";
import { getProductById } from "./Item";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

    const { id } = useParams()

    useEffect(() => {
        getProductById(id).then(prod => {
            setProduct(prod)
        })
    }, [id])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

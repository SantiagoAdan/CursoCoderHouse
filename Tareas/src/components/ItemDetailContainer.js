import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getProductById} from "./services/Firestore"

const ItemDetailContainer = ({addToCart, cart}) => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => {
      setLoading(true)

      getProductById(productId).then(prod => {
          setProduct(prod)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })
      
  }, [productId])
  

  if(loading) {
      return <h1>Cargando productos...</h1>
  }

  return (
    <div className="container">
      <ItemDetail {...product} addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default ItemDetailContainer;

import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "./services/Firebase";

const ItemDetailContainer = ({addToCart, cart}) => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => {
      setLoading(true)

      const docRef = doc(firestoreDb, 'products', productId)

      getDoc(docRef).then(querySnapshot => {
          const product = { id: querySnapshot.id, ...querySnapshot.data() }
          setProduct(product)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })

  }, [productId])
  

  if(loading) {
      return <h1>Cargando Productos...</h1>
  }

  return (
    <div className="container">
      <ItemDetail {...product} addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default ItemDetailContainer;

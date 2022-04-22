import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreDb } from "./services/Firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId),
          limit(10)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        console.log(querySnapshot.size);
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return (() => {
      setProducts([]);
    });
  }, [categoryId]);

  return (
    <div
      className="container"
      onClick={() => console.log("click en ItemListContainer")}
    >
      {loading ? 
        <h1>Cargando Productos...</h1>
       : products.length > 0 ? 
        <ItemList products={products} />
       : 
        <h1>Productos no encontrados</h1>
      }
    </div>
  );
};

export default ItemDetailContainer;

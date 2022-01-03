import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const {idProd} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `productos/${idProd}`);
    getDoc(queryProduct).then(resp => {
      setProduct({id: resp.id, ...resp.data()}); 
      setLoading(false);
    })
  }, [idProd]);
  
  return (
    <>
         {loading ? 
                <h2>Cargando...</h2>
            :
                <div className='border border-3 border-secondary'>
                    <ItemDetail product={product} />                        
                </div>
        }            
    </>
)
};
export default ItemDetailContainer;
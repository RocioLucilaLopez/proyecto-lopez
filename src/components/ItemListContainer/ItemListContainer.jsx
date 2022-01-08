import {useState, useEffect, memo} from "react";
import { useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {collection, getDocs, getFirestore, query, where } from  "firebase/firestore";


const ItemListContainer = memo(({nameCategory, greetings}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory} = useParams();

    useEffect(() => {
      
    const db = getFirestore();
    if(idCategory) {
      const queryProducts = query(collection(db, 'productos'),
      where('category', '==', idCategory));

      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
      setLoading(false); })

    } else {
      const queryProducts = collection(db, 'productos');
      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()})) ); 
      setLoading(false); })
    }
  }, [idCategory]);

  if (idCategory === 'remeras') {
    nameCategory = 'remeras';
  } else if (idCategory === 'leggins') {
    nameCategory = 'leggins';
  }

  return (
    <main>
      <h2>{nameCategory || greetings}</h2>
      { loading ? 
                <h2>Cargando...</h2> 
                :  
               <ItemList products={products} />
        }
    </main>
  )
});

export default ItemListContainer;
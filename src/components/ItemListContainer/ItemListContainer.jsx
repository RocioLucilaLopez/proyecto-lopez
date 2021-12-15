import {useState, useEffect} from "react";
import { getFetch } from "../../getFetch";
import ItemList from "../ItemList/ItemList";



function ItemListContainer  ( { greeting } ) {
    const [productos, setProductos] = useState([]); //hago persistentes mis datos 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => { //dentro de useEffect para que no bloquee el renderizado de cards
      getFetch 
      .then(resp => setProductos(resp)) //pido datos.los datos los traen la base de datos que viene de promesa y las promesas se capturan los resultados con then
      .catch(err => console.log(err)) //me devuelve datos pedidodos. muestra error
      .finally(() => setLoading(false)) 
    }, []);
    
    return (      //cuando carga esto se ejecuta el useEffect
      <div>
          { greeting }
          { loading ? 
          <h2> Cargando... </h2>
          :
          <ItemList productos={productos} />
          }
      </div>
     )                                                      
}  
export default ItemListContainer
import {useState, useEffect} from "react";
import { useParams} from "react-router-dom"; //Importo useParams para capturar el parametro que paso en el path de la Route
import { getFetch } from "../../getFetch";
import ItemList from "../ItemList/ItemList";



function ItemListContainer  ( { greeting } ) {
    const [productos, setProductos] = useState([]); //hago persistentes mis datos 
    const [loading, setLoading] = useState(true);
    
    const {idCategoria} = useParams() //extraigo el parametro que quiero haciendo destructuring- Le doy el mismo nombre con el que lo declaré en la Route
    
    useEffect(() => { //dentro de useEffect para que no bloquee el renderizado de cards
      if (idCategoria) {    
        getFetch 
        .then(resp => setProductos(resp.filter(prod=> prod.Categoria=== idCategoria))) //pido datos.los datos los traen la base de datos que viene de promesa y las promesas se capturan los resultados con then
        .catch(err => console.log(err)) //me devuelve datos pedidodos. muestra error
        .finally(() => setLoading(false))
      } else {
          getFetch 
          .then(resp => setProductos(resp)) //pido datos.los datos los traen la base de datos que viene de promesa y las promesas se capturan los resultados con then
          .catch(err => console.log(err)) //me devuelve datos pedidodos. muestra error
          .finally(() => setLoading(false)) 
        }
    }, [idCategoria]);
    
    console.log(idCategoria)
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
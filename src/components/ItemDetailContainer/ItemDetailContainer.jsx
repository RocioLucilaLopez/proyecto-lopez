import { useState, useEffect } from "react";
import getProducto from "../Producto/Producto";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(() => {
    getProducto.then((res) => setItem(res)).catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Enterizas</h1>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
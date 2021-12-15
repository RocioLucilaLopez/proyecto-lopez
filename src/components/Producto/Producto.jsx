
const Producto = {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0573/5373/2274/products/PortadaBanadores_360x.jpg?v=1625229065",
    title: "Enteriza Barceona",
    descripcion: " Realizado con Econyl ®. Forro en lycra.Esta colección Premium de cremalleras está fabricada con los desechos plásticos que recogidos en 50 km de la costa de Sri Lanka.",
    price: "3500",
  };
  
  const getProducto = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Producto);
    }, 2000);
  });
  
  export default getProducto;
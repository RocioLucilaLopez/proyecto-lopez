
const products = [
    { id: 1,imgUrl:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/Camiseta_Fantastik_540x.jpg?v=1636286406" ,Categoria: 'remeras', name: "Remera FANTASTIC", price: 2500 },
    { id: 2,imgUrl:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/CamisetaDiosa_540x.jpg?v=1636049989" ,Categoria: 'remeras', name: "Remera DIOSA", price: 2500 },
    { id: 3,imgUrl:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/BikerMarronFrente_1024x1024@2x.jpg?v=1636049989" ,Categoria: 'leggins', name: "biker mostaza", price: 1800 },
    { id: 4,imgUrl:"https://cdn.shopify.com/s/files/1/0573/5373/2274/files/image00007_360x.jpg?v=1636299310" ,Categoria: 'leggins', name: "biker verde", price: 1800 },
];

export const getFetch = new Promise((resolve)=>{
//promise tiene dos parametros, uso solo uno en este caso, para simular un delay en la carga-
    setTimeout(() => {
        resolve(products) //acá ejecutamos acciones, pueden ser asincronicas o no.
    }, 3000)
}) 




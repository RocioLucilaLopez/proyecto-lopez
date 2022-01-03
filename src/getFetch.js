
export const products = [
    { 
        id: 1,
        image:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/Camiseta_Fantastik_540x.jpg?v=1636286406" ,
        category: 'remeras', 
        name: "FANTASTIC", 
        price: 1500,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae odio dignissimos incidunt. Itaque dolorem accusamus, deserunt ipsum at reprehenderit quae dolor corporis, earum consectetur laboriosam iste atque autem omnis.",
        stock: 10
    },
    { 
        id: 2,
        image:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/CamisetaDiosa_540x.jpg?v=1636049989" ,
        category: 'remeras', 
        name: "DIOSA", 
        price: 1500,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae odio dignissimos incidunt. Itaque dolorem accusamus, deserunt ipsum at reprehenderit quae dolor corporis, earum consectetur laboriosam iste atque autem omnis.",
        stock: 10
    },
    { 
        id: 3,
        image:"https://cdn.shopify.com/s/files/1/0573/5373/2274/products/BikerMarronFrente_1024x1024@2x.jpg?v=1636049989" ,
        category: 'leggins', 
        name: "biker mostaza", 
        price: 2000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae odio dignissimos incidunt. Itaque dolorem accusamus, deserunt ipsum at reprehenderit quae dolor corporis, earum consectetur laboriosam iste atque autem omnis.",
        stock: 10
    },
    { 
        id: 4,
        image:"https://cdn.shopify.com/s/files/1/0573/5373/2274/files/image00007_360x.jpg?v=1636299310" ,
        category: 'leggins', 
        name: "biker verde", 
        price: 2000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae odio dignissimos incidunt. Itaque dolorem accusamus, deserunt ipsum at reprehenderit quae dolor corporis, earum consectetur laboriosam iste atque autem omnis.",
        stock: 10
    },

];

export const getFetch = new Promise((resolve)=>{
//promise tiene dos parametros, uso solo uno en este caso, para simular un delay en la carga-
    setTimeout(() => {
        resolve(products) //acá ejecutamos acciones, pueden ser asincronicas o no.
    }, 3000)
}) 




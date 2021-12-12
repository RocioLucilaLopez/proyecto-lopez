const products = [
        {"id":1, "name":"Bikers", "price":1500, "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png", "stock":6},
        {"id":2, "name":"Remerones", "price":2000, "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png", "stock":1},
        {"id":3, "name":"Bikini", "price":3500, "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png", "stock":2},
        {"id":4, "name":"Bolsito ", "price":2500, "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png", "stock":1},
        {"id":5, "name":"Tops", "price":1800, "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png", "stock":11},
      ]

export const getFetch = new Promise((resolve)=>{
//promise tiene dos parametros, uso solo uno en este caso, para simular un delay en la carga-
    setTimeout(() => {
        resolve(products) //acá ejecutamos acciones, pueden ser asincronicas o no.
    }, 3000)
}) 
import React from 'react'

    function ItemListContainer( props ) {
        console.log(props.greeting)
        return(
            <div>
            { props.greeting }
            <h1>Bienvenidos al Ecommerce</h1>
            </div>
        )
    }

export default ItemListContainer


const CheckoutForm = ({order, generarOrden, handleChange}) => {
  
  return (
      <form className="d-flex flex-column align-items-center" onSubmit={generarOrden} onChange={handleChange}>
          <input type="text" name="name" id="name" placeholder="Nombre" defaultValue={order.name} />
          <input type="text" name="lastname" id="lastname" placeholder="Apellido" defaultValue={order.lastname}/>
          <input type="email" name="email" id="email" placeholder="Correo electrónico" defaultValue={order.email} />
          <input type="tel" name="phone" id="phone" placeholder="Teléfono" defaultValue={order.phone} />
          <input type="text" name="address" id="address" placeholder="Dirección" />
          <button type="submit" className="btn-order">Generar Orden </button>
        </form>
  )
}

export default CheckoutForm

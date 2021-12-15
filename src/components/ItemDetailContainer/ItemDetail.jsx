const ItemDetail = ({ item }) => {
    return (
      <div className="DetailCard">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <img src={`${item.image}`} alt={`${item.image}`}></img>
      </div>
    );
  };
  export default ItemDetail;
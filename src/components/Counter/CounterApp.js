import ItemCount from "./ItemCount"

function CounterApp() {
  const inicial= 1
  const max= 10
  
  return (
    <div className="CounterApp">
        <ItemCount inicial={inicial} max={max} />
    </div>
        
  );
  }
  
  export default CounterApp;
  
import {BrowserRouter, Routes,Route } from "react-router-dom" ;
import './styles.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CounterApp from './components/Counter/CounterApp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart";
 

function App() {
 
  return (
      <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <NavBar />
              </header>  
                 <Routes>
                    <Route 
                        exact 
                        path="/categoria/:idCategoria" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />
                    <Route 
                          exact 
                          path="/cart" 
                          element={ <Cart  />} 
                    />        
                 </Routes> 
                <ItemListContainer greeting="Indumentaria sustentable" />
                <ItemDetailContainer />
                <CounterApp />
            
            </div>
      </BrowserRouter>

        
  );
}

export default App;

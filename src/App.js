import {BrowserRouter, Routes,Route } from "react-router-dom" ;
import './styles.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/cart";
import CartContextProvider from "./context/CartContext";
 

function App() {
 
  return (
      <CartContextProvider>
          <BrowserRouter>
                <div className="App">
                  <header className="App-header">
                    <NavBar />
                  </header>  
                    <Routes>
                        <Route 
                            path="/" 
                            element={ <ItemListContainer 
                            greeting='Bienvenidos a un emprendimiento sustentable' />}
                        />
                        <Route 
                            exact 
                            path="/all" 
                            element={ <ItemListContainer greeting='Bienvenidos a un emprendimiento sustentable' />} 
                        />
                        <Route  
                            path="/category/:idCategory" 
                            element={<ItemListContainer/>}/>
                        <Route 
                              exact 
                              path="/cart" 
                              element={ <Cart  />} 
                        />   
                        <Route  
                            path="/details/:idProd"
                            element={<ItemDetailContainer/>}
                        />
                    </Routes>   
                </div>
          </BrowserRouter>
      </CartContextProvider>
        
  );
}

export default App;

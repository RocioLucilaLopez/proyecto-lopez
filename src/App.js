
import './styles.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CounterApp from './components/Counter/CounterApp';

 

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <ItemListContainer greeting="Hola soy Itemlist" />
        <CounterApp />
    </div>
        
  );
}

export default App;

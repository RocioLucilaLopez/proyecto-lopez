
import './styles.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CounterApp from './components/Counter/CounterApp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

 

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <ItemListContainer greeting="Indumentaria sustentable" />
        <ItemDetailContainer />
        <CounterApp />
    </div>
        
  );
}

export default App;

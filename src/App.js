import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js'

function App() {
  return (
    <div>
        <NavBar/>
        <main className='main'>
          <ItemListContainer nombre="Manzana" stock='7' precio="3"/>
          <ItemListContainer nombre="Tomate" stock='15' precio="3"/>
          <ItemListContainer nombre="Naranja" stock='50' precio="1"/>
          <ItemListContainer nombre="Papaya" stock='2' precio="4"/>
        </main>
    </div>
  );
}

export default App;
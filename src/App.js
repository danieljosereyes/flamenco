import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js'

function App() {
  return (
    <div>
        <NavBar/>
        <main className='main'>
          <ItemListContainer/>
        </main>
    </div>
  );
}

export default App;
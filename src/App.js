import './App.scss';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar.js'

function App() {
  return (
    <div>
        <NavBar/>
        <main className='main'>
          <ItemDetailContainer/>
        </main>
    </div>
  );
}

export default App;
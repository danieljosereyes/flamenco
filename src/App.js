import './App.scss';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
        <main className='main'>

          <ItemDetailContainer id={3}/>
        </main>
    </div>
  );
}

export default App;
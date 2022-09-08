import './App.scss';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/pasillo/:parametro' element={ <ItemListContainer/> }/>
          <Route path='/detalles' element={ <ItemDetailContainer id={3}/> }/>
          <Route path="*" element={ <Navigate to="/"/>} />
        </Routes>

          

      </BrowserRouter>
    </div>
  );
}

export default App;
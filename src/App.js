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
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext.js'
 
function App() {



  return (
    <div>
      <CartProvider>

      <BrowserRouter>        
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/pasillo/:parametro' element={ <ItemListContainer/> }/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <Cart/> } />
          <Route path="*" element={ <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from  './components/navbar/Navbar';
import Styles from './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {menus, categorias} from './mock';
import Cart from './components/Cart/Cart';

const App = () => {
  return(
      <div>
      <BrowserRouter>
        <Navbar menus={menus} categorias={categorias}/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/category/:id' element={<ItemListContainer/>} />
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      <Route exact path='/cart' element={<Cart />} />
          </Routes>
      </BrowserRouter>
      </div>
   
    )
}

export default App;
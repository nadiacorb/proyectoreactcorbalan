import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from  './components/navbar/NavBar';
import Styles from './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {menus, categorias} from './components/mock/Mock';

const App = () => {
  return(
      <div>
      <BrowserRouter>
        <NavBar menus={menus} categorias={categorias}/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/category/:id' element={<ItemListContainer/>} />
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
      </div>
   
    )
}

export default App;

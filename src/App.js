import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/navbar/NavBar';
import Styles from './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {categorias,menus} from './components/mock/Mock';

const App = () => {
  return(
      <div>
      <h1>Distribuidora de hierros</h1>
      <BrowserRouter>
        <NavBar menus={menus} categorias={ItemListContainer}/>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/category/:id" element={<ItemListContainer/>} />
          </Routes>
      </BrowserRouter>
      </div>
   
    )
}

export default App;

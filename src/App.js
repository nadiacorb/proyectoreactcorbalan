import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, } from "firebase/firestore";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from  './components/navbar/Navbar';
import Styles from './App.css'
import { menus } from './mock';
import Cart from './components/Cart/Cart';

const App = () => {
    
    const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const categoryCollection = collection(db, "category");

    getDocs(categoryCollection).then((result) => {
      if (result.size === 0) {
        console.log("no retorna nada");
      }
      setCategorias(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log(categorias);
    });
  }, []);
    
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
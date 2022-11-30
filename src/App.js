import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/NavBar/NavBar';
import List from './components/List/List';
import Styles from './App.css'

const App = () => {
  const Productos = ['Hierros', 'Caños', 'Chapas', 'Perfiles', 'Mallas', 'Metal desplegado']

  return(
      <div>
      <h1>Distribuidora de hierros</h1>
      <NavBar/>
      <ItemListContainer name='Nadia'/>
    <List lista={Productos}/>
      </div>
   
    )
}

export default App;

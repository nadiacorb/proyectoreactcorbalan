import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/NavBar/NavBar';
import List from './components/List/List';


const App = () => {
  const Productos = ['Hierros', 'Caños', 'Chapas', 'Perfiles', 'Mallas', 'Metal desplegado']

  return(
    <ItemListContainer>
    <NavBar></NavBar>
    <List lista={Productos}/>
    </ItemListContainer>
    )
}

export default App;

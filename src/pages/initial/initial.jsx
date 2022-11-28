import Layout from '../../components/layout';
import Navbar from  '../../components/navbar';
import Lista from '../../components/list';

const Initial = () => {
	const Menus = ['Inicio','Productos', 'Promociones', 'Envios', 'Contacto']
	const Productos = ['Hierros', 'Caños', 'Chapas', 'Perfiles', 'Mallas', 'Metal desplegado']

	return(
		<Layout>
		<Navbar menus={Menus}><button>Carrito de compras</button></Navbar>
		<List lista={Productos}/>
		</Layout>
		)
}

export default Initial;

import Style from './styles/Item.scss';
import { Link } from "react-router-dom";
import {Productos,categorias} from '../mock/Mock.jsx';

const Item =({producto})=>{
	return(
        <div className='productos__img'>
            {
            producto.map((producto)=>{
                    return
                    <Item producto={producto}/>
            })
}
</div>
    
    
)}

export default Item;
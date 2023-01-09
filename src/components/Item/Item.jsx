import Style from './styles/Item.scss';
import { Link } from "react-router-dom";

const Item = ({producto}) => {
	return(
                <div className='productos__img'>
                    <img src={producto.img}/>
                    <p>{producto.name}</p>
                    <p>$ {producto.price}</p>
                    <Link to={`/item/${producto.id}`} className='producto__button'> Ver producto </Link>
                    
                </div>
)}

export default Item;

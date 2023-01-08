import Style from './styles/Item.scss';
import { Link } from "react-router-dom";

const Item = ({producto}) => {
	return(
           <div>
                <div className='productos__img'>
                    <img src={producto.img}/>
                    <Link to={`/item/${producto.id}`}> <p>{producto.name}</p></Link>
                </div>
        </div>
)}

export default Item;

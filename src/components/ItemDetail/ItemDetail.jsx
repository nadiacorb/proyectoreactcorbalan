import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Style from './styles/ItemDetail.scss';
import { useState } from 'react';


const ItemDetail =({producto})=>{
    const [cantidad, setCantidad] = useState(0)
    const {addToCart} = useContext(CartContext);
    
    const handleAddToCart = (count) => {
        addToCart(producto, count)
        setCantidad (count)
    }

 
  return(
        <div>
            <h1>Producto {producto.name}</h1>
            <div className='detalleproducto'>
                <img src={producto.img}/>
                <p>Precio: {producto.price}</p>
                <p><ItemCount onAddToCart={handleAddToCart}/></p>
                {cantidad>0&&<Link to='/cart'><button>Terminar Compra</button></Link>}
            </div>
            
        </div>
    )
}

export default ItemDetail;

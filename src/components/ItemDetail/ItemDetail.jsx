import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Style from './styles/ItemDetail.scss';

const ItemDetail =({producto})=>{
    
    const {addToCart, getTotalPrice, getTotalItemCount} = useContext(CartContext);
    
    const handleAddToCart = (count) => {
        addToCart(producto, count)
    }

 
    return(
        <div>
            <h1>Producto {producto.name}</h1>
        <div className='detalleproducto'>
            <img src={producto.img}/>
            <p>Precio total: {getTotalPrice()}</p>
            <p>Cantidad de producto total: {getTotalItemCount()}</p>
            <ItemCount onAddToCart={handleAddToCart}/>
        </div>
        </div>
    )
}

export default ItemDetail;

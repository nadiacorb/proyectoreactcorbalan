import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Style from './styles/ItemDetail.scss';

const ItemDetail =({producto})=>{
const {addCount} = useContext(CartContext);

const handlerAddCount =(count)=>{
        addCount(count,producto);
    }

    return(
        <div>
            <h1>Producto {producto.name}</h1>
        <div className='detalleproducto'>
            <img src={producto.img}/>
            <ItemCount onChangeCount={(e)=>handlerAddCount(e)} />
        </div>
        </div>
    )
}

export default ItemDetail;

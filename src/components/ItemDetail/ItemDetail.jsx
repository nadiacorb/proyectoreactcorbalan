import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail =({producto})=>{
const {addCount} = useContext(CartContext)

const handlerAddCount =(count)=>{
        console.log({paso:1,count, producto})
        addCount(count,producto[0])
    }

    return(
        <div>
            <h1>Producto {producto[0].name}</h1>
            <img src={producto[0].img}/>
            <ItemCount onChangeCount={(e)=>handlerAddCount(e)} />
        </div>
    )
}

export default ItemDetail;
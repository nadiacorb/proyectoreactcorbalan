import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto})=>{
const {addCount} = useContext(CartContext);

const handlerAddCount = (count) => {
    addCount(count,producto);
};
return(
<div>
    <h1>Detalle del producto {producto.name}</h1>
    <img src={producto.img}/>
    <ItemCount onChangeCount={(e)=>handlerAddCount(e)} />
</div>
);
};


export default ItemDetail;
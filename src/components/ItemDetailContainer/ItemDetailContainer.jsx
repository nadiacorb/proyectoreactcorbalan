import React from 'react';
import Style from './styles/ItemDetailContainer.scss';

const Productos = ({img, name, price, detalle}) => {
	return(
        <div>
	        <img src= {img} />
	        <h1> {name} </h1>
	        <h2> {detalle} </h2>
        </div>

		)

};


export default ItemLDetailContainer;
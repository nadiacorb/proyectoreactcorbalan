import React from 'react';

const ItemDetailContainer = ({img, name, price, detalle}) => {
	return(
        <div>
	        <img src= {img} />
	        <h1> {name} </h1>
	        <h2> {detalle} </h2>
        </div>

		)

};


export default ItemDetailContainer;
import React from 'react';
import Style from './styles/ItemListContainer.scss';

const ItemListContainer = (prop) => {
	return(
        <div className='greeting'>{prop.name}, Bienvenida a nuestra tienda</div>
		)

};


export default ItemListContainer;
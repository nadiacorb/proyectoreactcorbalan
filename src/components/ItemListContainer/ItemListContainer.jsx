import React from 'react';
import Style from './styles/ItemListContainer.scss';
import {Productos} from '../mock/Mock.jsx';


const ItemListContainer = () => {
	return(
        <div className="productos__img">
            {
            Productos.map((producto=>{
                    return(
                    <div>
                        <img src={producto.img} width={300} height={300}/>
                        <p>{producto.name}</p>
                    </div>
                    )
            }))
}
</div>
)}

export default ItemListContainer;
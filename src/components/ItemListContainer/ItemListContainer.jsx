import React from 'react';
import Style from './styles/ItemListContainer.scss';
import {Productos} from '../mock/Mock.jsx';


const ItemListContainer = () => {
	return(
        <div>
            {
            Productos.map((Productos=>{
                    return(
                    <div>
                        <img src={Productos.img} width={100} height={100}/>
                        <p>{Productos.name}</p>
                    </div>
                    )
            }))
}
</div>

export default ItemListContainer;
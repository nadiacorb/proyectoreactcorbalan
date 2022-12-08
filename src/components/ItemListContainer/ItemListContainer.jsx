import { useState } from 'react';
import React from 'react';
import Style from './styles/ItemListContainer.scss';
import {Productos,categorias} from '../mock/Mock.jsx';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const ItemListContainer=()=>{
    const [item, setItem] = useState(Productos);
    const {id} = useParams()
    
    const FilterCategory = new Promise((resolve,eject)=>{
        const newProductos = Productos.filter((p)=> p.category == id)
        resolve(newProductos)
    })
    
    useEffect(()=>{
        FilterCategory.then((response)=>{
        setItem(response)
        })
    }, [id])

 	return(
        <div className='productos__img'>
            {
            item.map((producto)=>{
                    return
                    <Item producto={producto}/>
            })
}
</div>
)}

export default ItemListContainer;